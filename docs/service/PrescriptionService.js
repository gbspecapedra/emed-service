'use strict';


/**
 * list all prescriptions
 * this can only be done by the logged user
 *
 * returns inline_response_200_5
 **/
exports.prescriptionsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "professionals" : [ {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "description" : "description",
    "id" : 0,
    "medicalRecordId" : 6,
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "description" : "description",
    "id" : 0,
    "medicalRecordId" : 6,
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
 * delete an existing prescription by id
 * this can only be done by the logged user
 *
 * id Long prescription's ID
 * no response value expected for this operation
 **/
exports.prescriptionsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * finds a prescription by id
 * this can only be done by the logged user
 *
 * id Long prescription's ID
 * returns Prescription
 **/
exports.prescriptionsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "id" : 0,
  "medicalRecordId" : 6,
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
 * updates an existing prescription by id
 * this can only be done by the logged user
 *
 * body Prescriptions_id_body  (optional)
 * id Long prescription's ID
 * returns Prescription
 **/
exports.prescriptionsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "id" : 0,
  "medicalRecordId" : 6,
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
 * creates a prescription
 * this can only be done by the logged user
 *
 * body Prescriptions_body  (optional)
 * returns Prescription
 **/
exports.prescriptionsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "id" : 0,
  "medicalRecordId" : 6,
  "updatedAt" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

