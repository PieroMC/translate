"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexContoller {
    /**
     * index
     */
    index(req, res) {
        res.send('Hello');
    }
}
exports.indexController = new IndexContoller();
