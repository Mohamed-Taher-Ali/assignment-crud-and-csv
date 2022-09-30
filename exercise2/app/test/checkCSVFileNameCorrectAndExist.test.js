const { checkCSVFileNameCorrectAndExist } = require("../services/checkCSVFileNameCorrectAndExist");
const fs = require('fs');


describe('test checkCSVFileNameCorrectAndExist function', () => {
  test("if the file not exist and it's name has correct extension", () => {
    expect(() => {checkCSVFileNameCorrectAndExist('fileName.csv')}).toThrow(Error);
  });

  test("if the file exist and it's name has correct extension", () => {
    const fileName = 'file.csv';
    fs.writeFileSync(fileName, "dummy data");

    const res = checkCSVFileNameCorrectAndExist(fileName);
    expect(res).toBe(undefined);

    fs.unlink(fileName, () => {})
  });


  test("if the file exist and it's name has correct extension", () => {
    const fileName = 'file.csv';
    fs.writeFileSync(fileName, "dummy data");

    const res = checkCSVFileNameCorrectAndExist(fileName);
    expect(res).toBe(undefined);

    fs.unlink(fileName, () => {})
  });
});