const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes.js');

const { restore } = require('../models/User');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
  });

module.exports = router;