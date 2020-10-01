import { query, Request, Response } from "express";
import pool from "../database";

class TranslateContoller {

    /**
     * show @void
     */
    public async show(req: Request, res: Response): Promise<void> {
        const words = await pool.query('SELECT * FROM words');
        if (words.length > 0) {
            res.json(words);
        } else {
            res.json({ message: "not found" })
        }

    }


    /**
     * showOne @void
     */
    public async showOne(req: Request, res: Response): Promise<void> {
        const word = await pool.query('SELECT * FROM words WHERE word = ?', req.params.word);
        if (word.length > 0) {
            res.json(word);
        } else {
            res.json({ message: "not found" })
        }
    }

    /**
     * create @void
     */
    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO words set ?', [req.body]);
        res.json({ message: "success" });
    }



    /**
     * delete @void
     */
    public async delete(req: Request, res: Response): Promise<void> {
        await pool.query('DELETE FROM words WHERE id = ?', req.params.id);
        res.json({message: "success"});
    }
}

const translateController = new TranslateContoller();
export default translateController;