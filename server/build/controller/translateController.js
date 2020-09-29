"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TranslateContoller {
    /**
     * index
     */
    index(req, res) {
        res.send('translate');
    }
}
const translateController = new TranslateContoller();
exports.default = translateController;
