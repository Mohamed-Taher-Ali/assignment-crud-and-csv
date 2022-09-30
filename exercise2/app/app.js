const
  express = require('express'),
  http = require('http'),
  app = express(),
  server = http.createServer(app),
  { main } = require('./services/main');

require('dotenv').config();
const port = process.env.PORT || 6000;

server.listen(port, () => {
  //call the root program
  main();
});