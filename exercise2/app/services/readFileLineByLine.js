const readLine = require("readline");
const fs = require("fs");

exports.readFileLineByLine = (
  fileFullPath='',
  onReadRow = () => {},
  onEnd = () => {}
  ) => {
  const stream = fs.createReadStream(fileFullPath);
  const reader = readLine.createInterface({ input: stream });

  reader.on("line", onReadRow);
  reader.on("close", onEnd);
}
