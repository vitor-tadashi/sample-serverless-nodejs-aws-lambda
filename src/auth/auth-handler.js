const fs = require('fs');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

/*
 * you need to put your secret in environment
 * pushing private keys to GitHub is a mortal sin punishable by death!
 * not really, but still don't push keys to GitHub. Please don't!
 * this is just an example.
 */
const secret = fs.readFileSync('./private.key');

// Policy helper function
const generatePolicy = (principalId, effect, resource) => {
    const authResponse = {};
    authResponse.principalId = principalId;
    if (effect && resource) {
        const policyDocument = {};
        policyDocument.Version = '2012-10-17';
        policyDocument.Statement = [];
        const statementOne = {};
        statementOne.Action = 'execute-api:Invoke';
        statementOne.Effect = effect;
        statementOne.Resource = resource;
        policyDocument.Statement[0] = statementOne;
        authResponse.policyDocument = policyDocument;
    }
    return authResponse;
};

module.exports.auth = (event, context, callback) => {
    // check header or url parameters or post parameters for token
    const token = event.authorizationToken;

    if (!token) return callback(null, 'Unauthorized');

    // verifies secret and checks exp
    jwt.verify(token, secret, (err, decoded) => {
        if (err) return callback(null, 'Unauthorized');

        // if everything is good, save to request for use in other routes
        return callback(null, generatePolicy(decoded.id, 'Allow', event.methodArn));
    });

};

module.exports.auth = (event, context, callback) => {
    // check header or url parameters or post parameters for token
    const token = event.authorizationToken;

    if (!token) return callback(null, 'Unauthorized');

    // verifies secret and checks exp
    jwt.verify(token, secret, (err, decoded) => {
        if (err) return callback(null, 'Unauthorized');

        // if everything is good, save to request for use in other routes
        return callback(null, generatePolicy(decoded.id, 'Allow', event.methodArn));
    });

};

module.exports.register = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            auth: true,
            token: signToken(event.pathParameters.id)
        })
    };

    callback(null, response);
};

module.exports.helloWithToken = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless! Hello World with JWT!',
            input: event
        })
    };

    callback(null, response);
};

function signToken(id) {
    return jwt.sign({ id: id }, secret, {
        expiresIn: 86400 // expires in 24 hours
    });
}

