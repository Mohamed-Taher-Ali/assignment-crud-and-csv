exports.checkFileArgIsCorrectCSVFileName = (inputName) => {
  const strArr =
    typeof inputName === 'string' &&
    inputName.split('.');

  return (
    strArr &&
    strArr[strArr.length - 1]
      .toLowerCase() === 'csv'
  );
}
