'use strict';


/**
 * list all exams
 * this can only be done by the logged user
 *
 * returns inline_response_200_7
 **/
exports.examsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "professionals" : [ {
    "name" : "name",
    "description" : "description",
    "id" : 0
  }, {
    "name" : "name",
    "description" : "description",
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
 * finds a exam by id
 * this can only be done by the logged user
 *
 * id Long exam's ID
 * returns Exam
 **/
exports.examsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "description" : "description",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

