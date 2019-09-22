const router = require('express').Router();
const board = require('./board');
const auth = require('./auth');
router.use('/board', board);
router.use('/auth',auth);
module.exports = router;
