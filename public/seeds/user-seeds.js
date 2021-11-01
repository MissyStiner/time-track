const { User } = require('../models');

const userSeeds = [
    {
        username: 'tom',
        email: 'tom@tom.com',
        password: 'password1'
    },
    
    {
        username: 'derimarg',
        email: 'derimarg@email.com',
        password: 'password'
    },
    {
        username: 'missysteiner',
        email: 'missy@email.com',
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