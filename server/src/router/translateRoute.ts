import { Router } from "express";

import translateController from "../controller/translateController";

class TranslateRoute {
    
   public router: Router = Router();
    
   constructor() {
        this.config();
    }

    /**
     * config
     */
    public config(): void {
        this.router.get('/', translateController.show);
        this.router.get('/:word', translateController.showOne);
        this.router.post('/', translateController.create);
        this.router.delete('/:id', translateController.delete);
    }
}
const translateRoute = new TranslateRoute();
export default translateRoute.router;