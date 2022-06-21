'use strict';


/**
 * list all patients
 * this can only be done by the logged user
 *
 * returns inline_response_200_3
 **/
exports.patientsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "professionals" : [ {
    "birthday" : "2000-01-23T04:56:07.000+00:00",
    "country" : "country",
    "healthPlanExpiration" : "2000-01-23T04:56:07.000+00:00",
    "gender" : "gender",
    "city" : "city",
    "county" : "county",
    "socialNumber" : 6,
    "active" : true,
    "healthPlanId" : 5,
    "zipcode" : "zipcode",
    "number" : 1,
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "street" : "street",
    "contact" : "contact",
    "name" : "name",
    "id" : 0,
    "state" : "state",
    "complement" : "complement",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "birthday" : "2000-01-23T04:56:07.000+00:00",
    "country" : "country",
    "healthPlanExpiration" : "2000-01-23T04:56:07.000+00:00",
    "gender" : "gender",
    "city" : "city",
    "county" : "county",
    "socialNumber" : 6,
    "active" : true,
    "healthPlanId" : 5,
    "zipcode" : "zipcode",
    "number" : 1,
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "street" : "street",
    "contact" : "contact",
    "name" : "name",
    "id" : 0,
    "state" : "state",
    "complement" : "complement",
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
 * disables an existing patient by id
 * this can only be done by the logged user
 *
 * id Long patient's ID
 * no response value expected for this operation
 **/
exports.patientsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * finds a patient by id
 * this can only be done by the logged user
 *
 * id Long patient's ID
 * returns Patient
 **/
exports.patientsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "birthday" : "2000-01-23T04:56:07.000+00:00",
  "country" : "country",
  "healthPlanExpiration" : "2000-01-23T04:56:07.000+00:00",
  "gender" : "gender",
  "city" : "city",
  "county" : "county",
  "socialNumber" : 6,
  "active" : true,
  "healthPlanId" : 5,
  "zipcode" : "zipcode",
  "number" : 1,
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "street" : "street",
  "contact" : "contact",
  "name" : "name",
  "id" : 0,
  "state" : "state",
  "complement" : "complement",
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
 * updates an existing patient by id
 * this can only be done by the logged user
 *
 * body Patients_id_body  (optional)
 * id Long patient's ID
 * returns Patient
 **/
exports.patientsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "birthday" : "2000-01-23T04:56:07.000+00:00",
  "country" : "country",
  "healthPlanExpiration" : "2000-01-23T04:56:07.000+00:00",
  "gender" : "gender",
  "city" : "city",
  "county" : "county",
  "socialNumber" : 6,
  "active" : true,
  "healthPlanId" : 5,
  "zipcode" : "zipcode",
  "number" : 1,
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "street" : "street",
  "contact" : "contact",
  "name" : "name",
  "id" : 0,
  "state" : "state",
  "complement" : "complement",
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
 * creates a patient
 * this can only be done by the logged user
 *
 * body Patients_body  (optional)
 * returns Patient
 **/
exports.patientsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "birthday" : "2000-01-23T04:56:07.000+00:00",
  "country" : "country",
  "healthPlanExpiration" : "2000-01-23T04:56:07.000+00:00",
  "gender" : "gender",
  "city" : "city",
  "county" : "county",
  "socialNumber" : 6,
  "active" : true,
  "healthPlanId" : 5,
  "zipcode" : "zipcode",
  "number" : 1,
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "street" : "street",
  "contact" : "contact",
  "name" : "name",
  "id" : 0,
  "state" : "state",
  "complement" : "complement",
  "updatedAt" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

