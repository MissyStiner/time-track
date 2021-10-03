const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedLoves = require('./love-seeds');

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

  await loves();
  console.log('-- UPDATING REACTIONS --');

  process.exit(0);
};

seedAll();