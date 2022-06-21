'use strict';

var utils = require('../utils/writer.js');
var Register = require('../service/RegisterService');

module.exports.registersAttendanceIdGET = function registersAttendanceIdGET (req, res, next, attendanceId) {
  Register.registersAttendanceIdGET(attendanceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registersIdGET = function registersIdGET (req, res, next, id) {
  Register.registersIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registersIdPUT = function registersIdPUT (req, res, next, body, id) {
  Register.registersIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registersPOST = function registersPOST (req, res, next, body) {
  Register.registersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
