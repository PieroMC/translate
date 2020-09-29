"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TranslateContoller {
    /**
     * index
     */
    index(req, res) {
        res.send('translate');
    }
    /**
     * create @void
     */
    create(req, res) {
        res.json({ text: "creating word" });
    }
    /**
     * delete
     */
    delete(req, res) {
    }
}
const translateController = new TranslateContoller();
exports.default = translateController;
