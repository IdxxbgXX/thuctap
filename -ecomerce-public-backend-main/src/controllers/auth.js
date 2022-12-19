const User = require('../models/user');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');
const cloudinary = require('cloudinary');
import userService from '../services/authServices';
exports.registerUser = catchAsyncErrors(async (req, res, next) => {

    let message = await userService.createNewUser(req.body);
    return res.status(200).json(message);
})

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const message = await userService.handleLoginUser(req.body);
    if (message.errCode === 0) {
        return res.status(200).cookie('token', message.token, message.options).json({
            success: true,
            token: message.token,
            user: message.user
        })
    } else {
        return res.status(200).json(message);
    }

})

exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
})
