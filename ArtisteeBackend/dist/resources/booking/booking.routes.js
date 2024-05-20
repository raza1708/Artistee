"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var booking_controller_1 = require("./booking.controller");
var router = (0, express_1.Router)();
router.route('/').post(booking_controller_1.bookArtist);
exports.default = router;
