// Create and send token and save in the cookie.
const sendToken = (user) => {

    // Create Jwt token
    const token = user.getJwtToken();
    // Options for cookie
    const options = {
        expires: new Date(
            Date.now() + 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }
    return {
        token: token,
        options: options
    }

    // res.send('Check your cookies. One should be in there now');

}

module.exports = sendToken;