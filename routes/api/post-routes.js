const router = require('express').Router();
const { Post, User, Like } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
          'id', 
          'time', 
          'day', 
          'created_at',
          [sequelize.literal('(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)'), 'like_count']
        ],
      order:  [['created_at', 'DESC']],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
          'id', 
          'time', 
          'day', 
          'created_at',
          [sequelize.literal('(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)'), 'like_count']
        ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/', (req, res) => {
    // expects {day: 'Monday, Tuesday, etc', time: '10.75, 11.50, etc', user_id: 1}
    Post.create({
      day: req.body.day,
      time: req.body.time,
      user_id: req.body.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

    // PUT /api/posts/liked
    router.put('/liked', (req, res) => {
        // custom static method created in models/Post.js
        Post.liked(req.body, { Like })
          .then(updatedPostData => res.json(updatedPostData))
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
      });

  router.put('/:id', (req, res) => {
    Post.update(
      {
        day: req.body.day
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  });

router.delete('/:id', (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // we will want to assign the router once Express API endpoints have been defined
  module.exports = router;