"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const env_1 = __importDefault(require("./env"));
const pool = promise_mysql_1.default.createPool(env_1.default.database);
pool.get("releaseConnection")
    .then(connection => {
    console.log('DataBase is Connected');
});
exports.default = pool;