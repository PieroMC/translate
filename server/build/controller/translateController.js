"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TranslateContoller {
    /**
     * show @void
     */
    show(req, res) {
        res.json({ text: "these are all the words" });
    }
    /**
     * showOne @void
     */
    showOne(req, res) {
        res.json({ text: "this is a word " + req.params.word });
    }
    /**
     * create @void
     */
    create(req, res) {
        res.json({ text: "creating a word" });
    }
    /**
     * delete @void
     */
    delete(req, res) {
        res.json({ text: "deleting a word " + req.params.id });
    }
}
const translateController = new TranslateContoller();
exports.default = translateController;
