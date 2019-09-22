const router = require('express').Router();
const controller = require('./board.controller.js');
const authMiddleware = require('../../../middlewares/auth');

router.use('/write',authMiddleware);
router.get('/write',controller.write);
module.exports = router;
