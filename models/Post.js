const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model { }

// create fields/columns for Post model
// create our Post model
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
        ],
        include: [
          {
            //model: models.Comment,
            attributes: ['id', 'post_id', 'user_id', 'created_at'],
            include: {
              model: models.User,
              attributes: ['username']
            }
          }
        ]
      });
    });
  }
}

Post.init(
  {
    id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true 
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_day: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_time: {
      type: DataTypes.INTEGER,
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
