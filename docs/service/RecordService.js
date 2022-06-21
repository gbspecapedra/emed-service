'use strict';


/**
 * finds a medical record by id
 * this can only be done by the logged user
 *
 * id Long register's ID
 * returns MedicalRecord
 **/
exports.recordsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "id" : 0,
  "attendanceId" : 6,
  "updatedAt" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * updates an existing medical record by id
 * this can only be done by the logged user
 *
 * body Records_id_body  (optional)
 * id Long record's ID
 * returns MedicalRecord
 **/
exports.recordsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "id" : 0,
  "attendanceId" : 6,
  "updatedAt" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

