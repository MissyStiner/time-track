const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const homeRoutes = require('../home-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/', homeRoutes);

module.exports = router;