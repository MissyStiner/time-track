const users = require('./user-seeds');
const posts = require('./post-seeds');
const comments = require('./comment-seeds');
const likes = require('./likes-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('-- INSTALLING SEEDS --');

  await users();
  console.log('-- UPDATING USERS --');

  await posts();
  console.log('-- UPDATING POSTS --');

  await comments();
  console.log('-- UPDATING COMMENTS --');

  await likes();
  console.log('-- UPDATING REACTIONS --');

  process.exit(0);
};

seedAll();