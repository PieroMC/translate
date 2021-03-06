"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const translateController_1 = __importDefault(require("../controller/translateController"));
class TranslateRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    /**
     * config
     */
    config() {
        this.router.get('/', translateController_1.default.show);
        this.router.get('/:word', translateController_1.default.showOne);
        this.router.post('/', translateController_1.default.create);
        this.router.delete('/:id', translateController_1.default.delete);
    }
}
const translateRoute = new TranslateRoute();
exports.default = translateRoute.router;
