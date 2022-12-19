const User = require('../models/user');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');
const cloudinary = require('cloudinary');


let handleLoginUser = (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            let checkEmail = {};
            const email = userData.email;
            const password = userData.password;
            await checkUserEmail(email).then(res => checkEmail = res)
            if (checkEmail) {
                const user = await User.findOne({ email: email }).select('+password')
                const isPasswordMatched = await user.comparePassword(password);
                if (!isPasswordMatched) {
                    resolve({
                        errCode: 2,
                        message: 'Invalid Email or Password'
                    })
                } else {
                    const { token, options } = sendToken(user);
                    resolve({
                        errCode: 0,
                        token: token,
                        options: options,
                        user: user
                    })
                    return 0;
                }
            } else {
                resolve({
                    errorCode: 1,
                    message: 'Account does not exist. Please register for an account'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}
let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let checkEmail = {}
            await checkUserEmail(data.email).then(res => checkEmail = res)
            if (checkEmail) {
                resolve({
                    errCode: 1,
                    message: 'Your email is already in used, please anothor email'
                });
            } else {
                const result = await cloudinary.v2.uploader
                    .upload(data.avatar, {
                        folder: 'avatars',
                        width: 150,
                        crop: "scale"
                    })

                const { name, email, password } = data;



                await User.create({
                    name,
                    email,
                    password,
                    avatar: {
                        public_id: result.public_id,
                        url: result.secure_url
                    }
                })


                resolve({
                    errCode: 0,
                    message: 'success',

                });
            }
        } catch (e) {
            reject(e);
        }
    })
}
let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userFind = await User.findOne({ email: userEmail });
            if (userFind) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewUser,
    handleLoginUser
}