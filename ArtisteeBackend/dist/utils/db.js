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
exports.dropTableBooking = exports.dropTableArtist = exports.addBudgetField = exports.addDataInDataBase = exports.addAdmin = exports.fireQuery = exports.showTable = exports.createAdminTable = exports.createBookingTable = exports.createArtistTable = exports.connect = exports.connection = void 0;
var mysql_1 = __importDefault(require("mysql"));
var random_name_1 = __importDefault(require("random-name"));
var index_1 = __importDefault(require("../config/index"));
var utility_function_1 = require("./utility.function");
exports.connection = mysql_1.default.createConnection({
    host: index_1.default.dbUrl,
    user: index_1.default.dbUser,
    password: index_1.default.dbPassword,
    port: index_1.default.dbPort,
    database: index_1.default.database,
});
var connect = function () {
    exports.connection.connect(function (err) {
        if (err) {
            console.error('Database connection failed: ' + err.stack);
            return;
        }
        console.log('Connected to database.');
    });
};
exports.connect = connect;
var createArtistTable = function () { return __awaiter(void 0, void 0, void 0, function () {
    var query, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                query = "CREATE TABLE Artists (\n      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\n      stage_name VARCHAR(100),\n      name VARCHAR(100),\n      profile_pic VARCHAR(100),\n      genere VARCHAR(100),\n      address VARCHAR(100),\n      mobile_no VARCHAR(100),\n      terriotary_of_representation VARCHAR(100)\n    )\n     ";
                return [4 /*yield*/, (0, exports.fireQuery)(query)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                console.log('Catch block error : = ', e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createArtistTable = createArtistTable;
var createBookingTable = function () { return __awaiter(void 0, void 0, void 0, function () {
    var query, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                query = "CREATE TABLE Booking (\n      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\n      country VARCHAR(100),\n      budget VARCHAR(100),\n      state VARCHAR(100),\n      capacity VARCHAR(100),\n      email VARCHAR(100),\n      date DATE,\n      artist_id INT,\n      FOREIGN KEY (artist_id) REFERENCES Artists(id)\n    )";
                return [4 /*yield*/, (0, exports.fireQuery)(query)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                console.log('Catch block error : = ', e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createBookingTable = createBookingTable;
var createAdminTable = function () { return __awaiter(void 0, void 0, void 0, function () {
    var query, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                query = "\n    CREATE TABLE Admin (\n      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\n      userName VARCHAR(100),\n      password VARCHAR(100)\n    )\n    ";
                return [4 /*yield*/, (0, exports.fireQuery)(query)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_3 = _a.sent();
                console.log('Error :- ', e_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createAdminTable = createAdminTable;
var showTable = function () { return __awaiter(void 0, void 0, void 0, function () {
    var query, result, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                query = "show tables";
                return [4 /*yield*/, (0, exports.fireQuery)(query)];
            case 1:
                result = _a.sent();
                console.log(result);
                return [3 /*break*/, 3];
            case 2:
                e_4 = _a.sent();
                console.log('Catch block error : = ', e_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.showTable = showTable;
var fireQuery = function (query, fields) { return __awaiter(void 0, void 0, void 0, function () {
    var p, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, new Promise(function (resolve, reject) {
                        exports.connection.query(query, function (error, r, fields) {
                            if (error) {
                                reject(error);
                            }
                            else {
                                var res = JSON.stringify(r);
                                var result = JSON.parse(res);
                                // console.log(result)
                                resolve(result);
                            }
                        });
                    })];
            case 1:
                p = _a.sent();
                return [2 /*return*/, p];
            case 2:
                e_5 = _a.sent();
                console.log('Catch block error : = ', e_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.fireQuery = fireQuery;
var addAdmin = function () { return __awaiter(void 0, void 0, void 0, function () {
    var query, e_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                query = "INSERT INTO Admin (userName, password)\n    VALUES ('".concat(index_1.default.adminPannelUserName, "' , '").concat(index_1.default.adminPannelPassword, "');");
                return [4 /*yield*/, (0, exports.fireQuery)(query)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_6 = _a.sent();
                console.log('Add admin error');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addAdmin = addAdmin;
var images = [
    'https://aws-artist-bucket.s3.ap-south-1.amazonaws.com/f0f78f00a86577020b32a43ffed65a32',
    'https://aws-artist-bucket.s3.ap-south-1.amazonaws.com/4b10a268f18915ac8b79915ea2b80775',
];
var genere = [
    'Rock',
    'Musical theatre',
    'Heavy Metal',
    'Electronic',
    'Funk',
    'Gospel',
    'Jazz fusion',
    'Opera',
    'Christian',
    'Medieval',
];
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var addDataInDataBase = function () { return __awaiter(void 0, void 0, void 0, function () {
    var i, query, e_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < 2000)) return [3 /*break*/, 4];
                query = (0, utility_function_1.makeInsertQuery)('Artists', {
                    stage_name: random_name_1.default.first().replace("'", ''),
                    name: random_name_1.default.last().replace("'", ''),
                    genere: genere[getRandomInt(0, 9)],
                    address: random_name_1.default.place().replace("'", ''),
                    profile_pic: images[getRandomInt(0, 1)],
                    mobile_no: '012345654',
                    terriotary_of_representation: 'World Wide',
                });
                return [4 /*yield*/, (0, exports.fireQuery)(query)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 6];
            case 5:
                e_7 = _a.sent();
                console.log('Add admin error :- ', e_7);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.addDataInDataBase = addDataInDataBase;
var addBudgetField = function () { return __awaiter(void 0, void 0, void 0, function () {
    var query, e_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                query = "ALTER TABLE Booking ADD budget varchar(255);";
                return [4 /*yield*/, (0, exports.fireQuery)(query)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_8 = _a.sent();
                console.log('Add admin error');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addBudgetField = addBudgetField;
var dropTableArtist = function () { return __awaiter(void 0, void 0, void 0, function () {
    var query, e_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                query = "drop table Artists";
                return [4 /*yield*/, (0, exports.fireQuery)(query)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_9 = _a.sent();
                console.log('Add admin error');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.dropTableArtist = dropTableArtist;
var dropTableBooking = function () { return __awaiter(void 0, void 0, void 0, function () {
    var query, e_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                query = "drop table Booking";
                return [4 /*yield*/, (0, exports.fireQuery)(query)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_10 = _a.sent();
                console.log('Add admin error');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.dropTableBooking = dropTableBooking;
