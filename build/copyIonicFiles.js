const path = require('path');
const fs = require('fs');
const pkg = require('../package.json');

const LIB_VERSION = pkg['devDependencies']['@ionic/core'];
const PACKAGE_WRAP_VERSION = '3'; // Meteor package wrap number https://docs.meteor.com/api/packagejs.html#PackageNamespace-describe


// List all Ionic asset files that need to be added as assets to the Meteor app.
const targetPath = path.join(__dirname, '..', 'package.js');
const ionicDist = path.join(__dirname, '..', 'dist'); // The folder where "npm run copy:all" script copies Ionic assets.
const removePath = path.join(__dirname, '..');

const files = getFilesRecursive(ionicDist);

fs.writeFileSync(targetPath,
`Package.describe({
  name: 'runisland:ionic4',
  version: '${LIB_VERSION}_${PACKAGE_WRAP_VERSION}',
  summary: 'Automatically import Ionic4 Web Components into your client templates',
  git: 'https://github.com/runisland/meteor-ionic4.git',
  documentation: 'README.md'
});

Package.onUse((api) => {
  api.versionsFrom('1.3');
  api.use(['static-html']);
  api.addFiles('scriptIonic.html', 'client');
  
  api.addAssets([
    ${files.map(cleanPath).join(',\n    ')}
  ], 'client');
});

// No test, only side effect of adding Ionic4 assets and loading ionic.js script.
`);

function cleanPath(source) {
  return `'.${source.replace(removePath, '')}'`;
}

function isDir(source) {
  return fs.lstatSync(source).isDirectory();
}

function getDirs(source) {
  return getChildren(source).filter(isDir);
}

function isFile(source) {
  return fs.lstatSync(source).isFile();
}

function getFiles(source) {
  return getChildren(source).filter(isFile);
}

function getChildren(source) {
  return fs.readdirSync(source).map(function (name) {
    return path.join(source, name);
  });
}

function getFilesRecursive(source) {
  const children = getChildren(source);
  let result = [];

  children.forEach((child) => {
    if (isDir(child)) {
      result = [...result, ...getFilesRecursive(child)];
    } else if (isFile(child)) {
      result.push(child);
    }
  });

  return result;
}
