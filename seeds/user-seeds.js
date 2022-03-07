// Import sequelize and User/Post models
const sequelize = require('../config/connection');
const { User, Post } = require('../models');

// information to populate userdata seeds
const userdata = [
  {
    username: 'camille0',
    password: 'password123'
  },
  {
    username: 'BillyBob1',
    password: 'password123'
  },
  {
    username: 'ToddSbiz',
    password: 'password123'
  }
];

// function to seed userdata, requiring hooks.
const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

// export seedUsers
module.exports = seedUsers;
