const User = require('./User');
const Post = require('./Post');
const Love = require('./Love');

// associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.belongsToMany(Post, {
  through: Love,
  as: 'loved_posts',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
  through: Love,
  as: 'loved_posts',
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

Love.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Love.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Love, {
  foreignKey: 'user_id'
});

Post.hasMany(Love, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Love };
