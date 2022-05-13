'use strict';

var utils = require('../utils/writer.js');
var Medicine = require('../service/MedicineService');

module.exports.medicinesGET = function medicinesGET (req, res, next) {
  Medicine.medicinesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.medicinesIdGET = function medicinesIdGET (req, res, next, id) {
  Medicine.medicinesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
