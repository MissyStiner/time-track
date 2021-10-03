const { Post } = require('../models');

<<<<<<< HEAD
const postdata = [
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
=======
const postSeeds = [
    {
        user_id: 1,
        title: 'Checkout work',
        post_day: 'Monday',
        post_time: 9.56,
    },
    {
        user_id: 3,
        title: 'Meeting at office',
        post_day: 'Tuesday',
        post_time: 2.56,
    },
    {
        user_id: 8,
        title: "lunch reservation",
        post_day: 'Monday',
        post_time: 1.56,
    },
    {
        user_id: 2,
        title: "Start resume",
        post_day: 'Monday',
        post_time: 9.56,
    },
    {
        user_id: 7,
        title: 'Haircut appoiment',
        post_day: 'Thursday',
        post_time: 4.56,
    },
    {
        user_id: 4,
        title: 'Brunch family',
        post_day: 'Sunday',
        post_time: 8.56,
    },
    {
        user_id: 6,
        title: 'Finish school project',
        post_day: 'some text',
        post_time: 4.56,
    },
    {
        user_id: 5,
        title: 'Test is at 3:30',
        post_day: ' Friday',
        post_time: 2.56,
    },
    {
        user_id: 1,
        title: 'Homework is almost ready',
        post_day: 'Sunday',
        post_time: 7.56,
    },
    {
        user_id: 6,
        title: 'Test at office is tomorrow',
        post_day: 'Friday',
        post_time: 6.56,
    },
    {
        user_id: 3,
        title: 'Set parameters at post development',
        post_day: 'Saturday',
        post_time: 5.56,
    },
    {
        user_id: 2,
        title: 'Vacations',
        post_day: 'Monday',
        post_time: 3.56,
    }
>>>>>>> b155e65a8448b0cff5ffb3110d884874fd23242b
];

const posts = () => Post.bulkCreate(postSeeds, {individualHooks: true});

module.exports = posts;
const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
