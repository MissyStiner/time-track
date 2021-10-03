const User = require('./User');
const Post = require('./Post');
const Like = require('./Like');

// associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.belongsToMany(Post, {
  through: Like,
  as: 'liked_posts',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
  through: Like,
  as: 'liked_posts',
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

Like.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Like.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Like, {
  foreignKey: 'user_id'
});

Post.hasMany(Like, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Like };
