"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var getArtists_controller_1 = require("./getArtists.controller");
var router = (0, express_1.Router)();
router.route('/:index').post(getArtists_controller_1.getArtists);
router.route('/artist/:id').get(getArtists_controller_1.getArtistById);
exports.default = router;
