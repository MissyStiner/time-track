const router = require('express').Router();

const { restore } = require('../models/User');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    if (req.url === '/hi') {
        return res.status(200).json({message: 'you said hi'})
    }
    res.status(200).json({
        url: req.url
    })
//   res.status(404).end();
});

module.exports = router;