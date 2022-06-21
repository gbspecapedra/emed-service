'use strict';

var utils = require('../utils/writer.js');
var Specialty = require('../service/SpecialtyService');

module.exports.specialtiesGET = function specialtiesGET (req, res, next) {
  Specialty.specialtiesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
