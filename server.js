const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

// Whenever the .handlebars extension is encountered call the function in the second arg
app.engine('handlebars', hbs.engine);

// Whenever .render is called by express, assume the filenmae passed as the first arg is a .handlebars file (located in /views by default)
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

console.log('statically served path: ', path.join(__dirname, 'public'))

app.use(require('./controllers'));



// turn on connection to db and server
// force false - 
// force true = database connection must sync with model definitions and associations.
// sync = true makes tables recreate if there are any association changes.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});