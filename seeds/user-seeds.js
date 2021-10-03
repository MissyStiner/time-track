const { User } = require('../models');

const userSeeds = [
    {
        username: 'aki19',
        email: 'aki@fakemail.com',
        password: 'password'
    },
    {
        username: 'derimarg',
        email: 'derimarg@email.com',
        password: 'password'
    },
    {
        username: 'jose33',
        email: 'rjose@fakemail.com',
        password: 'password'
    },
    {
        username: 'john10',
        email: 'john@fakemail.com',
        password: 'password'
    },
    {
        username: 'charlhector',
        email: 'charlh@fakemail.com',
        password: 'password'
    },
    {
        username: 'kim_lopez',
        email: 'kim@fakemail.com',
        password: 'password'
    },
    {
        username: 'shann',
        email: 'shann@fakemail.com',
        password: 'password'
    },
    {
        username: 'dg45',
        email: 'dg45@email.com',
        password: 'password'
    }
];

const users = () => User.bulkCreate(userSeeds, {individualHooks: true});

module.exports = users;