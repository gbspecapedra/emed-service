'use strict';

var utils = require('../utils/writer.js');
var Attendance = require('../service/AttendanceService');

module.exports.attendancesGET = function attendancesGET (req, res, next) {
  Attendance.attendancesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.attendancesIdPUT = function attendancesIdPUT (req, res, next, body, id) {
  Attendance.attendancesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.attendancesPOST = function attendancesPOST (req, res, next, body) {
  Attendance.attendancesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
