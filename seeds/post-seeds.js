const { Post } = require('../models');

const postSeeds = [
  {
    day: 'Sunday',
    time: 9.56,
    user_id: 10
  },
  {
    day: 'Monday',
    time: 10.5,
    user_id: 8
  },
  {
    day: 'Tuesday',
    time: 7.98,
    user_id: 1
  },
  {
    day: 'Wednesday',
    time: 12.3,
    user_id: 4
  },
  {
    day: 'Thursday',
    time: 7.99,
    user_id: 7
  },
  {
    day: 'Sunday',
    time: 6.87,
    user_id: 4
  },
  {
    day: 'Friday',
    time: 7.56,
    user_id: 1
  },
  {
    day: 'Saturday',
    time: 8.96,
    user_id: 1
  },
  {
    day: 'Sunday',
    time: 7.65,
    user_id: 9
  },
  {
    day: 'Monday',
    time: 8.97,
    user_id: 5
  },
  {
    day: 'Friday',
    time: 7.58,
    user_id: 3
  },
  {
    day: 'Sunday',
    time: 13.2,
    user_id: 10
  },
  {
    day: 'Donec dapibus.',
    time: 11.4,
    user_id: 8
  },
  {
    day: 'Nulla tellus.',
    time: 9.68,
    user_id: 3
  },
  {
    day: 'Saturday',
    time: 8.97,
    user_id: 3
  },
  {
    day: 'Friday',
    time: 12.4,
    user_id: 7
  },
  {
    day: 'Thursday',
    time: 9.87,
    user_id: 6
  },
  {
    day: 'Wednesday',
    time: 4.56,
    user_id: 4
  },
  {
    day: 'Tuesday',
    time: 9.67,
    user_id: 6
  },
  {
    day: 'Monday',
    time: 10.6,
    user_id: 7
  }
];

const posts = () => Post.bulkCreate(postSeeds);

module.exports = posts;