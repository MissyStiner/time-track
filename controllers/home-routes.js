const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session);
    Post.findAll({
      attributes: [
        'id',
        'time',
        'day',
        'created_at',
        // [sequelize.literal('(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)'), 'like_count']
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        //console.log(dbPostData[0]);
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;

// router.get('/', (req, res) => {
//     res.render('homepage', {
//       id: 1,
//       time: '8.925 seconds',
//       day: 'Monday',
//       created_at: new Date(),
//       //like_count: 10,
//       user: {
//         username: 'test_user'
//       }
//     });
//   });