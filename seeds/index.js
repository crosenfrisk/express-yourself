// Import all seed files
const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

// Import sequelize
const sequelize = require('../config/connection');

// function to run all seeds and populate the database
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedPosts();
  console.log('--------------');

  await seedComments();
  console.log('--------------');

  process.exit(0);
};

// calling function, so when we run index.js, seeds are populated.
seedAll();
