"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_middleware_1 = require("../../utils/auth.middleware");
var auth_controller_1 = require("./auth.controller");
var router = (0, express_1.Router)();
router.route('/signin').post([auth_middleware_1.validateAuthInput], auth_controller_1.signin);
exports.default = router;
