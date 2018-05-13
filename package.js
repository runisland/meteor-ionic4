const path = Npm.require('path');
const fs = Npm.require('fs');

Package.describe({
  name: 'runisland:ionic4',
  version: '4.0.0-alpha.6', // Meteor package wrap number https://docs.meteor.com/api/packagejs.html#PackageNamespace-describe
  summary: 'Automatically import Ionic4 Web Components into your Client templates',
  git: 'https://github.com/runisland/meteor-ionic4.git',
  documentation: 'README.md'
});

Package.onUse((api) => {
  api.versionsFrom('1.3');
  api.use(['static-html']);
  api.addFiles('scriptIonic.html', 'client');

  // Within package.js we do not have access to `process` or `__dirname`, so we have to assume the path…
  const files = getFilesRecursive('./dist');

  api.addAssets(files, 'client');
});

// No test, only side effect of adding Ionic4 assets and loading ionic.js script.


function isDir(source) {
  return fs.lstatSync(source).isDirectory();
}

function isFile(source) {
  return fs.lstatSync(source).isFile();
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
