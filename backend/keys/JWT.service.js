const fs = require('fs');
const jwt = require('jsonwebtoken');

// use 'utf8' to get string instead of byte array  (512 bit key)
const privateKEY = fs.readFileSync('keys/private.key', 'utf8');
const publicKEY = fs.readFileSync('keys/public.key', 'utf8');

module.exports = {
    sign: (payload, $Options) => {
        const signOptions = {
            issuer: $Options.issuer,
            subject: $Options.subject,
            audience: $Options.audience,
            expiresIn: "30d",
            algorithm: "RS256"
        };
        return jwt.sign(payload, privateKEY, signOptions);
    },
    verify: (token, $Option) => {
        var verifyOptions = {
            issuer: $Option.issuer,
            subject: $Option.subject,
            audience: $Option.audience,
            expiresIn: "30d",
            algorithm: ["RS256"]
        };
        try {
            return jwt.verify(token, publicKEY, verifyOptions);
        } catch (err) {
            console.log('err', err)
            return false;
        }
    },
    //Got this from medium article, didn't use it.
    // decode: (token) => {
    //     return jwt.decode(token, {complete: true});
    // }
}