const { checkFileIsExist } = require("../services/checkFileIsExist");
const { join } = require('path');


describe('test checkFileIsExist function', () => {
  test("if the file exist", () => {
    const res = checkFileIsExist(join(__dirname, '..', 'app.js'));
    expect(res).toBe(true);
  });

  test("if the file not exist", () => {
    const res = checkFileIsExist(join(__dirname, '..', 'ap.js'));
    expect(res).toBe(false);
  });
});