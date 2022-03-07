// Imports for server.js
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

// To use express
const app = express();
// To display app on 3001 or wherever the app is deployed via Heroku
const PORT = process.env.PORT || 3001;

// Use sequelize to run configuration -- via config/connection and subsequent JAWS.DB extension
// for .env variables
const sequelize = require('./config/connection');
// To create session for user
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  
  // to use session
  app.use(session(sess));
  
  // importing helpers
  const helpers = require('./utils/helpers');
  
  // using helpers
  const hbs = exphbs.create({ helpers });
  
  // using handlebars for site
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, 'public')));
  
  // use routes
  app.use(require('./controllers/'));
  
  // synce database using sequelize (rather than running MySQL every time)
  sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });