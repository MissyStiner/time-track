const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userSeeds = [
  {
    name: "Derimar Gray",
    username: "derimarg",
    email: "derimarg@email.com",
    password: "password",
  },
  {
    name: "Tom Tom",
    username: "tomtom1",
    email: "tom@tom.com",
    password: "password",
  },
  {
    name: "Ido Ddam",
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password'
  },
  {
    name: "Dsta Nmey",
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password'
  },
  {
    name: "Jiry Di",
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'password'
  },
  {
    name: "Prague Ms",
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password'
  },
  {
    name: "Derimar Gray",
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: 'password'
  },
  {
    name: "Pennie ell",
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'password'
  },
  {
    name: "Sabbin mss",
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password'
  },
  {
    name: "Arthur Jmaca",
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'password'
  }
];

const users = () => User.bulkCreate(userSeeds, {individualHooks: true});

module.exports = users;