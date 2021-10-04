const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model { }

// create fields/columns for Post model
Post.init(
  {
    id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true 
    },
    post_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_day: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_time: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;