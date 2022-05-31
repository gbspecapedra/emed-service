'use strict';

var utils = require('../utils/writer.js');
var Record = require('../service/RecordService');

module.exports.recordsIdGET = function recordsIdGET (req, res, next, id) {
  Record.recordsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recordsIdPUT = function recordsIdPUT (req, res, next, body, id) {
  Record.recordsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
