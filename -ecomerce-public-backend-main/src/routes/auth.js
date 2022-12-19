const express = require('express');
const router = express.Router();


const {
    registerUser,
    loginUser,
    logoutUser
} = require('../controllers/auth');

router.route('/logout').get(logoutUser);
router.route('/login').post(loginUser);
router.route('/register').post(registerUser);

module.exports = router;