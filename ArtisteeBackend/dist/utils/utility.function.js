"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMailMessage = exports.makeBookingQuery = exports.makeFilterQuery = exports.makeUpdateQuery = exports.makeDeleteQuery = exports.makeInsertQuery = exports.isAuthenticated = void 0;
var js_base64_1 = require("js-base64");
var config_1 = __importStar(require("../config"));
var isAuthenticated = function (userName, password) {
    var pass = js_base64_1.Base64.atob(password);
    var uName = js_base64_1.Base64.atob(userName);
    return (pass === config_1.default.adminPannelPassword &&
        uName === config_1.default.adminPannelUserName);
};
exports.isAuthenticated = isAuthenticated;
var getColumnNameAndValues = function (properties) {
    var columbName = '(';
    var values = '(';
    var k = 0;
    Object.keys(properties).map(function (key) {
        if (!!properties[key]) {
            if (k === 0) {
                columbName = columbName + key;
                values = values + "'" + properties[key] + "'";
            }
            else {
                columbName = columbName + ',' + key;
                values = values + ", '" + properties[key] + "'";
            }
            k++;
        }
        return;
    });
    columbName = columbName + ')';
    values = values + ')';
    return { columbName: columbName, values: values };
};
var makeInsertQuery = function (tableName, properties) {
    var _a = getColumnNameAndValues(properties), columbName = _a.columbName, values = _a.values;
    return "INSERT INTO ".concat(tableName, " ").concat(columbName, " VALUES ").concat(values, ";");
};
exports.makeInsertQuery = makeInsertQuery;
var makeDeleteQuery = function (tableName, id) {
    return "DELETE FROM ".concat(tableName, " WHERE id=").concat(id, ";");
};
exports.makeDeleteQuery = makeDeleteQuery;
var makeUpdateQuery = function (tableName, properties, id) {
    var expression = '';
    var k = 0;
    Object.keys(properties).map(function (key) {
        if (!!properties[key]) {
            if (k === 0) {
                expression = expression + key + " = '" + properties[key] + "'";
            }
            else {
                expression = expression + ' , ' + key + " = '" + properties[key] + "'";
            }
            k++;
        }
        return;
    });
    return "UPDATE ".concat(tableName, " SET ").concat(expression, " where id=").concat(id, ";");
};
exports.makeUpdateQuery = makeUpdateQuery;
var filterType = {
    ALL: 'ALL',
    ALPHABET: 'ALPHABET',
    GENERE: 'GENERE',
    SEARCH: 'SEARCH',
};
var makeFilterQuery = function (_a) {
    var type = _a.type, keyWord = _a.keyWord, limit = _a.limit, skip = _a.skip;
    var query;
    switch (type) {
        case filterType.ALL:
            query = "SELECT * from Artists order by id desc limit ".concat(limit, " offset ").concat(skip);
            break;
        case filterType.ALPHABET:
            query = "SELECT * from Artists WHERE LOWER(stage_name) LIKE '".concat(keyWord, "%' order by id desc  limit ").concat(limit, " offset ").concat(skip);
            break;
        case filterType.GENERE:
            query = "SELECT * from Artists WHERE genere='".concat(keyWord, "' order by id desc limit ").concat(limit, " offset ").concat(skip);
            break;
        case filterType.SEARCH:
            query = "SELECT * from Artists WHERE LOWER(stage_name)  LIKE '%".concat(keyWord, "%' order by id desc limit ").concat(limit, " offset ").concat(skip);
            break;
        default:
            break;
    }
    return query;
};
exports.makeFilterQuery = makeFilterQuery;
var makeBookingQuery = function (_a) {
    var keyWord = _a.keyWord, limit = _a.limit, skip = _a.skip;
    return "SELECT Booking.id, Booking.email, Booking.budget, Booking.country, Booking.state, Booking.capacity, Booking.date, Artists.stage_name ,Artists.name, Artists.profile_pic, Artists.genere, Artists.address  from Booking inner join Artists on LOWER(Booking.email) LIKE '%".concat(keyWord, "%' and Booking.artist_id =Artists.id  order by id desc limit ").concat(limit, " offset ").concat(skip);
};
exports.makeBookingQuery = makeBookingQuery;
var createMailMessage = function (_a) {
    var email = _a.email, country = _a.country, state = _a.state, capacity = _a.capacity, date = _a.date;
    var message = {
        from: config_1.awsSESConfig.mialId,
        to: config_1.awsSESConfig.mialId,
        subject: "New Booking arrived from ".concat(email),
        html: "<h1>Email : ".concat(email, "</h1>\n    <h1>country : ").concat(country, "</h1>\n    <h1>state : ").concat(state, "</h1>\n    <h1>capacity : ").concat(capacity, "</h1>\n    <h1>date : ").concat(date, "</h1>\n            "),
    };
    return message;
};
exports.createMailMessage = createMailMessage;
