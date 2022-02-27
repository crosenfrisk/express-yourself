const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'camille0',
    email: 'camille01@gmail.com',
    password: 'password123'
  },
  {
    username: 'BillyBob1',
    email: 'BBsq@comcast.net',
    password: 'password123'
  },
  {
    username: 'ToddSbiz',
    email: 'TFrank@biz.com',
    password: 'password123'
  },
  {
    username: 'lsstammer',
    email: '154last3@noodle.net',
    password: 'password123'
  },
  {
    username: '889fg',
    email: '889@yahoo.com',
    password: 'password123'
  },
  {
    username: 'msfig',
    email: 'coop@space.net',
    password: 'password123'
  },
  {
    username: 'toodles',
    email: 'tmfrance@netscape.com',
    password: 'password123'
  },
  {
    username: 'modSquad',
    email: 'nellie57@escape.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
