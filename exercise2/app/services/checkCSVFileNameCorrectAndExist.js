const { checkFileArgIsCorrectCSVFileName } = require('./checkFileArgIsCorrectCSVFileName');
const { checkFileIsExist } = require('./checkFileIsExist');


exports.checkCSVFileNameCorrectAndExist = (csvFileFullPath) => {
  if (!checkFileArgIsCorrectCSVFileName(csvFileFullPath))
    throw new Error("The file extension isn't correct");

  if (!checkFileIsExist(csvFileFullPath))
    throw new Error("The file not exist");
}
