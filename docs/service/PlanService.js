'use strict';


/**
 * list all health plans
 * this can only be done by the logged user
 *
 * returns inline_response_200_8
 **/
exports.plansGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "professionals" : [ {
    "registrationNumber" : 6,
    "name" : "name",
    "id" : 0
  }, {
    "registrationNumber" : 6,
    "name" : "name",
    "id" : 0
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * finds a health plan by id
 * this can only be done by the logged user
 *
 * id Long plan's ID
 * returns HealthPlan
 **/
exports.plansIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "registrationNumber" : 6,
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

