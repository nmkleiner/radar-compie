const fs = require('fs');
const jwt = require('jsonwebtoken');

// use 'utf8' to get string instead of byte array  (512 bit key)
console.log('cwd',process.cwd())
const privateKEY = fs.readFileSync('keys/private.txt', 'utf8');
const publicKEY = fs.readFileSync('keys/public.txt', 'utf8');
module.exports = {
    sign: (payload, $Options) => {
        /*
         sOptions = {
          issuer: "Authorizaxtion/Resource/This server",
          subject: "iam@user.me",
          audience: "Client_Identity" // this should be provided by client
         }
        */
        // Token signing options
        var signOptions = {
            issuer: $Options.issuer,
            subject: $Options.subject,
            audience: $Options.audience,
            expiresIn: "30d",    // 30 days validity
            algorithm: "RS256"
        };
        return jwt.sign(payload, privateKEY, signOptions);
    },
    verify: (token, $Option) => {
        /*
         vOption = {
          issuer: "Authorization/Resource/This server",
          subject: "iam@user.me",
          audience: "Client_Identity" // this should be provided by client
         }
        */
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
            return false;
        }
    },
    decode: (token) => {
        return jwt.decode(token, {complete: true});
        //returns null if token is invalid
    }
}