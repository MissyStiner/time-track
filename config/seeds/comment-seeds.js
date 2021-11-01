const { Comment } = require('../models');

const commentSeeds = [
    {
        post_id: 1,
        user_id: 2,
        comment_text: 'I think I can help with this!'
    },
    {
        post_id: 2,
        user_id: 2,
        comment_text: 'Congrats! Hope you get the job!'
    },
    {
        post_id: 2,
        user_id: 5,
        comment_text: 'Thanks for sharing!'
    },
    {
        post_id: 3,
        user_id: 7,
        comment_text: 'I had the same problem!'
    },
    {
        post_id: 4,
        user_id: 6,
        comment_text: 'This is shocking!'
    },
    {
        post_id: 4,
        user_id: 5,
        comment_text: 'Hmmm, maybe I will give it a shot!'
    },
    {
        post_id: 6,
        user_id: 4,
        comment_text: 'You can use Redirect(...)'
    },
    {
        post_id: 7,
        user_id: 8,
        comment_text: 'I am interested! I would love to help future bootcampers!'
    },
    {
        post_id: 8,
        user_id: 1,
        comment_text: 'I think I can help with this! I just have a couple of questions...'
    },
    {
        post_id: 10,
        user_id: 1,
        comment_text: 'I wish I could have been there!'
    },
    {
        post_id: 10,
        user_id: 7,
        comment_text: 'Great info! Thanks for sharing'
    },
    {
        post_id: 11,
        user_id: 4,
        comment_text: 'I think I can help with this!'
    }
];

const comments = () => Comment.bulkCreate(commentSeeds, {individualHooks: true});

module.exports = comments;