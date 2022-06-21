'use strict';


/**
 * list data for attendance status
 * this can only be done by the logged user
 *
 * returns inline_response_200_12
 **/
exports.reportsStatusGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 0,
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * list data for attendance type
 * this can only be done by the logged user
 *
 * returns inline_response_200_11
 **/
exports.reportsTypeGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 0,
  "type" : "type"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

