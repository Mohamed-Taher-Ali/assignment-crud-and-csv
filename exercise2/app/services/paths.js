const path = require('path');


const rootPath = path.join(__dirname, '..');
const inputsDirPath = path.join(rootPath, 'inputs');
const outputsDirPath = path.join(rootPath, 'inputs');

module.exports = { 
    rootPath,
    inputsDirPath,
    outputsDirPath,
 };