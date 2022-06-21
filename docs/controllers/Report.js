'use strict';

var utils = require('../utils/writer.js');
var Report = require('../service/ReportService');

module.exports.reportsStatusGET = function reportsStatusGET (req, res, next) {
  Report.reportsStatusGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reportsTypeGET = function reportsTypeGET (req, res, next) {
  Report.reportsTypeGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
