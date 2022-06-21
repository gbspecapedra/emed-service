'use strict';

var utils = require('../utils/writer.js');
var Plan = require('../service/PlanService');

module.exports.plansGET = function plansGET (req, res, next) {
  Plan.plansGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.plansIdGET = function plansIdGET (req, res, next, id) {
  Plan.plansIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
