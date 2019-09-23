const router = require('express').Router();
const controller = require('./auth.controller');
const authMiddleware = require('../../../middlewares/auth');
router.post('/login', controller.login);
router.post('/singup', controller.singUp);
module.exports = router;