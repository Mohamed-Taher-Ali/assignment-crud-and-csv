const fs = require('fs');
const { writeCSVFile } = require('../services/writeCSVFile');


describe('test writeFile function', () => {

  test("if all data correct", async () => {
    const content = [["content"]];
    const file = "file.txt";

    writeCSVFile(file, content, () => {
      fs.readFile(file, 'utf8', function (err, data) {
        expect(data).toBe('content\r\n');
        fs.unlink(file, () => {});
      });
    });

  });
});