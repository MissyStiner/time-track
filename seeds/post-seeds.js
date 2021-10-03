const { Post } = require('../models');

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
];

const posts = () => Post.bulkCreate(postSeeds, {individualHooks: true});

module.exports = posts;