const fs = require('fs');

exports.checkFileIsExist = (filePath) => {
  return fs.existsSync(filePath);
}
