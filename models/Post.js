// connection to MySQL stored in connections.js
// Model and Datatypes from the sequalize package
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// our Post model
class Post extends Model {}

// fields/columns for Post model
// parameter 1 - Post schema defined
// id column is primary key & it auto-increments
// user_id who posted the time/date entry
// references property refers to User model with id defined by key
Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      day: {
        type: DataTypes.STRING,
        allowNull: false
      },
      time: {
        type: DataTypes.STRING,
        allowNull: false,
        //validate: {
          // Should be a decimal number; MVP is a string
        //}
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