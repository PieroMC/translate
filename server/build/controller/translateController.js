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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class TranslateContoller {
    /**
     * show @void
     */
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const words = yield database_1.default.query('SELECT * FROM words');
            if (words.length > 0) {
                res.json(words);
            }
            else {
                res.json({ message: "not found" });
            }
        });
    }
    /**
     * showOne @void
     */
    showOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const word = yield database_1.default.query('SELECT * FROM words WHERE word = ?', req.params.word);
            if (word.length > 0) {
                res.json(word);
            }
            else {
                res.json({ message: "not found" });
            }
        });
    }
    /**
     * create @void
     */
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO words set ?', [req.body]);
            res.json({ message: "success" });
        });
    }
    /**
     * delete @void
     */
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM words WHERE id = ?', req.params.id);
            res.json({ message: "success" });
        });
    }
}
const translateController = new TranslateContoller();
exports.default = translateController;
