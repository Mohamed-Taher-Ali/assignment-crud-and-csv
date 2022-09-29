const
  bodyParser = require('body-parser'),
  cors = require('cors');

  const routers = {
    users: require('./users'),
  };

module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.json());

  for (const key in routers) {
    const url = `/api/${key}`;
    app.use(url, routers[key]);
  }
};