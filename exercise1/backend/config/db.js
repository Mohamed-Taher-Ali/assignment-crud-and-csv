let mongoose = require('mongoose');

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;

const url = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

module.exports = (() => {
  mongoose.connect(url,{
      useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(()=> console.log('db connected.'))
    .catch((e)=> console.log(`db error is: ${e}`))
})();