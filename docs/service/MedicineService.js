'use strict';


/**
 * list all medicines
 * this can only be done by the logged user
 *
 * returns inline_response_200_6
 **/
exports.medicinesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "professionals" : [ {
    "substance" : "substance",
    "usage" : "usage",
    "name" : "name",
    "producer" : "producer",
    "concentration" : "concentration",
    "id" : 0
  }, {
    "substance" : "substance",
    "usage" : "usage",
    "name" : "name",
    "producer" : "producer",
    "concentration" : "concentration",
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
 * finds a medicine by id
 * this can only be done by the logged user
 *
 * id Long medicine's ID
 * returns Medicine
 **/
exports.medicinesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "substance" : "substance",
  "usage" : "usage",
  "name" : "name",
  "producer" : "producer",
  "concentration" : "concentration",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

