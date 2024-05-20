"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBooking = exports.getUploadImageUrl = exports.updateArtist = exports.deleteArtist = exports.addArtist = void 0;
var auth_middleware_1 = require("./../../utils/auth.middleware");
var utility_function_1 = require("../../utils/utility.function");
var db_1 = require("../../utils/db");
var config_1 = require("../../config");
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var crypto_1 = __importDefault(require("crypto"));
var util_1 = require("util");
var randomBytes = (0, util_1.promisify)(crypto_1.default.randomBytes);
var addArtist = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, stage_name, address, genere, name, profile_pic, mobile_no, terriotary_of_representation, query, result, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, stage_name = _a.stage_name, address = _a.address, genere = _a.genere, name = _a.name, profile_pic = _a.profile_pic, mobile_no = _a.mobile_no, terriotary_of_representation = _a.terriotary_of_representation;
                if (stage_name === '') {
                    (0, auth_middleware_1.sendResponseError)(500, { isOk: false, message: 'Artist must have stage name' }, res);
                }
                query = (0, utility_function_1.makeInsertQuery)('Artists', {
                    stage_name: stage_name,
                    address: address,
                    genere: genere,
                    name: name,
                    profile_pic: profile_pic,
                    mobile_no: mobile_no,
                    terriotary_of_representation: terriotary_of_representation,
                });
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, (0, db_1.fireQuery)(query)];
            case 2:
                _b.sent();
                return [4 /*yield*/, (0, db_1.fireQuery)("SELECT * FROM Artists WHERE id= LAST_INSERT_ID()")
                    // console.log(result)
                ];
            case 3:
                result = _b.sent();
                // console.log(result)
                res.send({
                    message: 'Artist add Successfully',
                    isOk: true,
                    item: JSON.parse(JSON.stringify(result)),
                });
                return [3 /*break*/, 5];
            case 4:
                e_1 = _b.sent();
                console.log('Error in Fire add artist query');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.addArtist = addArtist;
var deleteArtist = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, results, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                query = (0, utility_function_1.makeDeleteQuery)('Artists', req.params.id);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, db_1.fireQuery)(query)
                    // console.log(results)
                ];
            case 2:
                results = _a.sent();
                // console.log(results)
                res.send({ message: 'Artist delete Successfully', isOk: true });
                return [3 /*break*/, 4];
            case 3:
                e_2 = _a.sent();
                console.log('Error in Fire delete artist query');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteArtist = deleteArtist;
var updateArtist = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, stage_name, address, genere, name, profile_pic, mobile_no, terriotary_of_representation, query, e_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, stage_name = _a.stage_name, address = _a.address, genere = _a.genere, name = _a.name, profile_pic = _a.profile_pic, mobile_no = _a.mobile_no, terriotary_of_representation = _a.terriotary_of_representation;
                query = (0, utility_function_1.makeUpdateQuery)('Artists', {
                    stage_name: stage_name,
                    address: address,
                    genere: genere,
                    name: name,
                    profile_pic: profile_pic,
                    mobile_no: mobile_no,
                    terriotary_of_representation: terriotary_of_representation,
                }, req.params.id);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, db_1.fireQuery)(query)];
            case 2:
                _b.sent();
                res.send({ message: 'Successfully update artist', isOk: true });
                return [3 /*break*/, 4];
            case 3:
                e_3 = _b.sent();
                console.log('Error in Fire update artist query');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateArtist = updateArtist;
var s3 = new aws_sdk_1.default.S3({
    region: config_1.awsS3Bucket.region,
    accessKeyId: config_1.awsS3Bucket.accessKeyId,
    secretAccessKey: config_1.awsS3Bucket.secretAccessKey,
    signatureVersion: 'v4',
});
var generateUploadUrl = function () { return __awaiter(void 0, void 0, void 0, function () {
    var rawByte, imageName, params, uploadUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, randomBytes(16)];
            case 1:
                rawByte = _a.sent();
                imageName = rawByte.toString('hex');
                params = {
                    Bucket: config_1.awsS3Bucket.bucketName,
                    Key: imageName,
                    Expires: 120,
                };
                return [4 /*yield*/, s3.getSignedUrlPromise('putObject', params)];
            case 2:
                uploadUrl = _a.sent();
                return [2 /*return*/, uploadUrl];
        }
    });
}); };
var getUploadImageUrl = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var url, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, generateUploadUrl()];
            case 1:
                url = _a.sent();
                res.send({ message: 'url generated Successfully', isOk: true, url: url });
                return [3 /*break*/, 3];
            case 2:
                e_4 = _a.sent();
                console.log('Error in get sign image url ', e_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUploadImageUrl = getUploadImageUrl;
var getAllBooking = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var limit, skip, hasMore, keyWord, query, results, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                limit = 10;
                skip = (parseInt(req.params.index) - 1) * limit;
                hasMore = true;
                keyWord = req.body.keyWord;
                query = (0, utility_function_1.makeBookingQuery)({ keyWord: keyWord, limit: limit, skip: skip });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, db_1.fireQuery)(query)];
            case 2:
                results = _a.sent();
                if (results.length === 0 || results.length < limit) {
                    hasMore = false;
                }
                console.log('Resultsss====>', JSON.stringify(results, null, 2));
                res.send({ result: results, hasMore: hasMore, isOk: true });
                return [3 /*break*/, 4];
            case 3:
                e_5 = _a.sent();
                console.log('eror : ', e_5);
                (0, auth_middleware_1.sendResponseError)(500, "Error ".concat(e_5), res);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getAllBooking = getAllBooking;
