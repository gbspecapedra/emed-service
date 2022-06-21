'use strict';

var utils = require('../utils/writer.js');
var Professional = require('../service/ProfessionalService');

module.exports.professionalsGET = function professionalsGET (req, res, next) {
  Professional.professionalsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.professionalsIdDELETE = function professionalsIdDELETE (req, res, next, id) {
  Professional.professionalsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.professionalsIdGET = function professionalsIdGET (req, res, next, id) {
  Professional.professionalsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.professionalsIdPUT = function professionalsIdPUT (req, res, next, body, id) {
  Professional.professionalsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.professionalsPOST = function professionalsPOST (req, res, next, body) {
  Professional.professionalsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
