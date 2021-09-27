// connection to MySQL stored in connections.js
// Model and Datatypes from the sequalize package
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// our Post model
class Post extends Model {
    static liked(body, models) {
      return models.Like.create({
        user_id: body.user_id,
        post_id: body.post_id
      }).then(() => {
        return Post.findOne({
          where: {
            id: body.post_id
          },
          attributes: [
            'id',
            'time',
            'day',
            'created_at',
            //[sequelize.literal('(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)'), 'like_count']
          ]
        });
      });
    }
  }

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