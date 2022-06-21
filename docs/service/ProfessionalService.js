'use strict';


/**
 * list all professionals
 * this can only be done by the logged user
 *
 * returns inline_response_200_2
 **/
exports.professionalsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "professionals" : [ {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "specialty" : "specialty",
    "password" : "",
    "rememberMeToken" : "rememberMeToken",
    "registrationNumber" : 6,
    "name" : "name",
    "active" : true,
    "id" : 0,
    "type" : "DOCTOR",
    "registrationState" : "registrationState",
    "email" : "email",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "specialty" : "specialty",
    "password" : "",
    "rememberMeToken" : "rememberMeToken",
    "registrationNumber" : 6,
    "name" : "name",
    "active" : true,
    "id" : 0,
    "type" : "DOCTOR",
    "registrationState" : "registrationState",
    "email" : "email",
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
 * deletes an existing professional by id
 * this can only be done by the logged user
 *
 * id Long professional's ID
 * no response value expected for this operation
 **/
exports.professionalsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * finds a professional by id
 * this can only be done by the logged user
 *
 * id Long professional's ID
 * returns Professional
 **/
exports.professionalsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "specialty" : "specialty",
  "password" : "",
  "rememberMeToken" : "rememberMeToken",
  "registrationNumber" : 6,
  "name" : "name",
  "active" : true,
  "id" : 0,
  "type" : "DOCTOR",
  "registrationState" : "registrationState",
  "email" : "email",
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
 * updates an existing professional by id
 * this can only be done by the logged user
 *
 * body Professionals_id_body  (optional)
 * id Long professional's ID
 * returns Professional
 **/
exports.professionalsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "specialty" : "specialty",
  "password" : "",
  "rememberMeToken" : "rememberMeToken",
  "registrationNumber" : 6,
  "name" : "name",
  "active" : true,
  "id" : 0,
  "type" : "DOCTOR",
  "registrationState" : "registrationState",
  "email" : "email",
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
 * creates a professional
 * this can only be done by the logged user
 *
 * body Professionals_body  (optional)
 * returns Professional
 **/
exports.professionalsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "specialty" : "specialty",
  "password" : "",
  "rememberMeToken" : "rememberMeToken",
  "registrationNumber" : 6,
  "name" : "name",
  "active" : true,
  "id" : 0,
  "type" : "DOCTOR",
  "registrationState" : "registrationState",
  "email" : "email",
  "updatedAt" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

