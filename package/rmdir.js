const fs = require('fs');
const path = require('path');

const folderPath = process.env.DIR || 'node_modules/';

if (!fs.existsSync(folderPath) || !fs.lstatSync(folderPath).isDirectory()) {
    return;
}

function folderDeepDelete(folderPath) {
    var files = fs.readdirSync(folderPath);
    files.forEach(function(filename) {
        var curPath = path.join(folderPath, filename);
        if (fs.lstatSync(curPath).isDirectory()) {
            folderDeepDelete(curPath);
        } else {
            fs.unlinkSync(curPath);
        }
    });
    fs.rmdirSync(folderPath);
}

folderDeepDelete(folderPath);
