const { Post } = require('../models');

const postSeeds = [
    {
        user_id: 1,
        post_date: 'Checkout work',
        post_day: 'Monday',
        post_time: 9.56,
    },
    {
        user_id: 3,
        post_date: 'Oct/20/2021',
        post_day: 'Tuesday',
        post_time: 2.56,
    },
    {
        user_id: 8,
        post_date: "lunch reservation",
        post_day: 'Monday',
        post_time: 1.56,
    },
    {
        user_id: 2,
        post_date: "Start resume",
        post_day: 'Monday',
        post_time: 9.56,
    },
    {
        user_id: 7,
        post_date: 'Haircut appoiment',
        post_day: 'Thursday',
        post_time: 4.56,
    },
    {
        user_id: 4,
        post_date: 'Brunch family',
        post_day: 'Sunday',
        post_time: 8.56,
    },
    {
        user_id: 6,
        post_date: 'Finish school project',
        post_day: 'some text',
        post_time: 4.56,
    },
    {
        user_id: 5,
        post_date: 'Test is at 3:30',
        post_day: ' Friday',
        post_time: 2.56,
    },
    {
        user_id: 1,
        post_date: 'Homework is almost ready',
        post_day: 'Sunday',
        post_time: 7.56,
    },
    {
        user_id: 6,
        post_date: 'Test at office is tomorrow',
        post_day: 'Friday',
        post_time: 6.56,
    },
    {
        user_id: 3,
        post_date: 'Set parameters at post development',
        post_day: 'Saturday',
        post_time: 5.56,
    },
    {
        user_id: 2,
        post_date: 'Vacations',
        post_day: 'Monday',
        post_time: 3.56,
    }
];

const posts = () => Post.bulkCreate(postSeeds, {individualHooks: true});

module.exports = posts;