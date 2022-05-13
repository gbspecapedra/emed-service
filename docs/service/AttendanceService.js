'use strict';


/**
 * list all attendances
 * this can only be done by the logged user
 *
 * returns inline_response_200_4
 **/
exports.attendancesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "professionals" : [ {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "patientId" : 1,
    "cancellationReason" : "cancellationReason",
    "id" : 0,
    "professionalId" : 6,
    "type" : "GENERAL",
    "status" : "CONFIRMED",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "patientId" : 1,
    "cancellationReason" : "cancellationReason",
    "id" : 0,
    "professionalId" : 6,
    "type" : "GENERAL",
    "status" : "CONFIRMED",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
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
 * updates an existing attendance by id
 * this can only be done by the logged user
 *
 * body Attendances_id_body  (optional)
 * id Long attendance's ID
 * returns Attendance
 **/
exports.attendancesIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "patientId" : 1,
  "cancellationReason" : "cancellationReason",
  "id" : 0,
  "professionalId" : 6,
  "type" : "GENERAL",
  "status" : "CONFIRMED",
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
 * creates an attendance
 * this can only be done by the logged user
 *
 * body Attendances_body  (optional)
 * returns Attendance
 **/
exports.attendancesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "patientId" : 1,
  "cancellationReason" : "cancellationReason",
  "id" : 0,
  "professionalId" : 6,
  "type" : "GENERAL",
  "status" : "CONFIRMED",
  "updatedAt" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

