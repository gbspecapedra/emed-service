'use strict';


/**
 * authenticates a user
 *
 * body Login_body  (optional)
 * returns inline_response_200
 **/
exports.loginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "expires_at" : "2000-01-23T04:56:07.000+00:00",
  "type" : "",
  "token" : "token"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * revokes a logged user's token
 *
 * returns inline_response_200_1
 **/
exports.logoutPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "revoked" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * reset a user's password
 *
 * body Reset_body  (optional)
 * no response value expected for this operation
 **/
exports.resetPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

