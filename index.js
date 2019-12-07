const request = require('request');

const config = require('./config.json');

/**
 * Get the whole database from the game API database.
 * Returns a JSON object.
 */
function getAll() {
    request.get(config.address + '/all', { json: true }, (err, res, body) => {
        if (err) { 
            return console.log('[Avoid API] Error: ' + err); 
        }

        return body;
    });
}

/**
 * Get data of a specific user from the game API database.
 * Returns a JSON object.
 */
function getUser(userid) {
    request.get(config.address + '/user' + userid, { json: true }, (err, res, body) => {
        if (err) { 
            return console.log('[Avoid API] Error: ' + err); 
        }

        return body;
    });
}

/**
 * Get the count of users in the API database.
 * @return {number}
 */
function getCount() {
    request.get(config.address + '/count', { json: true }, (err, res, body) => {
        if (err) { 
            return console.log('[Avoid API] Error: ' + err); 
        }

        reqcountint = parseInt(body);

        return reqcountint;
    });
}