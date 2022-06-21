'use strict';

var utils = require('../utils/writer.js');
var Prescription = require('../service/PrescriptionService');

module.exports.prescriptionsGET = function prescriptionsGET (req, res, next) {
  Prescription.prescriptionsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.prescriptionsIdDELETE = function prescriptionsIdDELETE (req, res, next, id) {
  Prescription.prescriptionsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.prescriptionsIdGET = function prescriptionsIdGET (req, res, next, id) {
  Prescription.prescriptionsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.prescriptionsIdPUT = function prescriptionsIdPUT (req, res, next, body, id) {
  Prescription.prescriptionsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.prescriptionsPOST = function prescriptionsPOST (req, res, next, body) {
  Prescription.prescriptionsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
