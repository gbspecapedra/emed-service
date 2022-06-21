'use strict';

var utils = require('../utils/writer.js');
var Exam = require('../service/ExamService');

module.exports.examsGET = function examsGET (req, res, next) {
  Exam.examsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.examsIdGET = function examsIdGET (req, res, next, id) {
  Exam.examsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
