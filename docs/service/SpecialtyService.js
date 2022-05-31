'use strict';


/**
 * list all specialties
 * this can only be done by the logged user
 *
 * returns inline_response_200_9
 **/
exports.specialtiesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "professionals" : [ {
    "name" : "name"
  }, {
    "name" : "name"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

