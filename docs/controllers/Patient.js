'use strict';

var utils = require('../utils/writer.js');
var Patient = require('../service/PatientService');

module.exports.patientsGET = function patientsGET (req, res, next) {
  Patient.patientsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patientsIdDELETE = function patientsIdDELETE (req, res, next, id) {
  Patient.patientsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patientsIdGET = function patientsIdGET (req, res, next, id) {
  Patient.patientsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patientsIdPUT = function patientsIdPUT (req, res, next, body, id) {
  Patient.patientsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patientsPOST = function patientsPOST (req, res, next, body) {
  Patient.patientsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
