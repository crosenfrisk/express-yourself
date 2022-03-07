// Import Post model
const { Post } = require('../models');

// post data seeds using Lorem Ipsum
const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sodales nulla.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sodales nulla.',
    user_id: 2
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sodales nulla.',
    user_id: 3
  }
];

// Function to create post data
const seedPosts = () => Post.bulkCreate(postdata);

// export seedPosts
module.exports = seedPosts;
