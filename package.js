const path = Npm.require('path');
const fs = Npm.require('fs');
const runislandIonic4PackageName = 'runisland-ionic4';

Package.describe({
  name: 'runisland:ionic4',
  version: '4.0.0-alpha.7', // Meteor package wrap number https://docs.meteor.com/api/packagejs.html#PackageNamespace-describe
  summary: 'Automatically import Ionic4 Web Components into your Client templates',
  git: 'https://github.com/runisland/meteor-ionic4.git',
  documentation: 'README.md'
});

Package.onUse((api) => {
  api.versionsFrom('1.3');
  api.use(['static-html']);
  api.addFiles('scriptIonic.html', 'client');

  // Within package.js we do not have access to `process` or `__dirname`, so we have to assume the path…
  const runislandIonic4PackagePath = isMeteorProject('.') ? getRunislandIonic4Package('.') : '.';

  const distPath = runislandIonic4PackagePath ? path.join(runislandIonic4PackagePath, 'dist') : null;
  const files = distPath ? getFilesRecursive(distPath) : null;
  if (files) {
    const fileRelPathes = files.map ((p) => {
      return path.relative(runislandIonic4PackagePath, p);
    })
    api.addAssets(fileRelPathes, 'client');
  } else {
    console.log("Something went wrong: no 'dist' folder available.");
  } 

});

// No test, only side effect of adding Ionic4 assets and loading ionic.js script.


function isMeteorProject(source) {
  return getChildren(source).indexOf('.meteor') > -1;
}

function getRunislandIonic4Package(source) {
  const packagesPath = path.resolve(source, 'packages');
  const packagePathes = getChildren(packagesPath);
  return packagePathes.find((p) => {
    if (!isDir(p)) {
      return;
    }

    const packageJsonPath = path.resolve(p, 'package.json');
    const result = isRunislandIonic4PackageJson(packageJsonPath);
    return result;
  })

}

function isRunislandIonic4PackageJson(source) {
  if (! isFile(source)) {
    return false;
  }

  const content = fs.readFileSync(source, 'utf8');
  const jsonContent = JSON.parse(content);
  const packageName = jsonContent.name;
  return packageName === runislandIonic4PackageName;
}

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
