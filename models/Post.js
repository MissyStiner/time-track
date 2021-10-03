const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
<<<<<<< HEAD
class Post extends Model {
  static uploves(body, models) {
    return models.Loves.create({
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
          'post_body',
          'created_at',
          //[sequelize.literal('(SELECT COUNT(*) FROM love WHERE post.id = love.post_id)'), 'love_count']
          [sequelize.literal('(SELECT COUNT(*) FROM loves WHERE post.id = loves.post_id)'), 'loves_count']
        ],
        include: [
          {
            model: models.Comment,
            attributes: ['id', 'comment_body', 'post_id', 'user_id', 'created_at'],
            include: {
              model: models.User,
              attributes: ['name', 'username']
            }
          }
        ]
      });
    });
  }
}

// create fields/columns for Post model
=======
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

>>>>>>> developer
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

<<<<<<< HEAD
module.exports = Post;
=======
module.exports = Post;
>>>>>>> developer
