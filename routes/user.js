const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');
router.use(express.urlencoded());
router.use(express.static('assets'));
router.get('/profile', userController.profile);
module.exports = router;