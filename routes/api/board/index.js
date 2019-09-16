const router = require('express').Router();
const controller = require('./board.controller.js');

router.post('/board', controller.postBoard);
router.get('/board', controller.getBoard);
router.put('/board', controller.putBoard);
router.delete('/board', controller.deleteBoard);

module.exports = router;
