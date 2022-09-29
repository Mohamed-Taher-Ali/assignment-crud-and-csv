const throwHttpError = require('http-errors');


exports.respError = (e) => {
  return { error: e }
}


exports.validatePhone = (phoneTxt) => {
  const Regex = /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
  return Regex.test(phoneTxt)
}


exports.throwHttpErrorIfError = (data, status) => {
throwHttpError(status, data);
}