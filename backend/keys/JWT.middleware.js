const jwtService = require('./JWT.service');


module.exports = {
    middleware: function (req, res, next) {
        const {token, options} = req.body;

        const isLoginOrSignupRequest = !!req.body.email;
        if (isLoginOrSignupRequest) {
            next()
        } else {
            try {
                const isVerified = jwtService.verify(token, options);
                if (!isVerified) {
                    throw new Error('unauthorized');
                }
                next()
            } catch (err) {
                console.log(err);
            }
        }
    }
}