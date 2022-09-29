const
  express = require('express'),
  path = require('path'),
  http = require('http'),
  app = express(),
  server = http.createServer(app);

require('dotenv').config();
require('./config/db');
require('./routes')(app);

port = process.env.NODE_DOCKER_PORT || 6000;

app.use(express.static(
  path.join(__dirname, './build')
));

server.listen(port, () => (
  console.log(`listening on port ${port} !`)
));
