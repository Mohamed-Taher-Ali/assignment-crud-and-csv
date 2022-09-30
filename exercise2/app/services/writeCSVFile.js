const fs = require("fs");


exports.writeCSVFile = (fullPathFileName, data=[[]], callback) => {
const stream = fs.createWriteStream(fullPathFileName);

for (let i of data) { stream.write(i.join(",") + "\r\n"); }
stream.end(callback);
}
