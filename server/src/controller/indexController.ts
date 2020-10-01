import { Request, Response } from "express";

class IndexContoller {
    
    /**
     * index
     */
    public index(req: Request, res: Response) {
        res.send('Hello');
    }
}

export const indexController = new IndexContoller();