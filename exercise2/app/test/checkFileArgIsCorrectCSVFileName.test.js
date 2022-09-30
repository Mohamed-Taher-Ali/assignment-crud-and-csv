const { checkFileArgIsCorrectCSVFileName } = require("../services/checkFileArgIsCorrectCSVFileName");


describe('test checkFileArgIsCorrectCSVFileName function', () => {
  test("if the name has correct extension", () => {
    const res = checkFileArgIsCorrectCSVFileName('fileName.csv');
    expect(res).toBe(true);
  });

  test("if the name hasn't correct extension - 1", () => {
    const res = checkFileArgIsCorrectCSVFileName('fileName.txt');
    expect(res).toBe(false);
  });

  test("if the name hasn't correct extension - 2", () => {
    const res = checkFileArgIsCorrectCSVFileName('fileName.csv.txt');
    expect(res).toBe(false);
  });
});