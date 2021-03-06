import  express, { Application }  from "express";
import morgan from "morgan";
import cors from "cors";
import  indexRoute from "./router/indexRoute";
import translateRoute from "./router/translateRoute";
class Server {

    app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.router();
        this.start();
    }
    config(): void{
        this.app.set('port', process.env.PORT || 5000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    router(): void{
        this.app.use('/', indexRoute);
        this.app.use('/api/translate', translateRoute);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ' + this.app.get('port'));
        });
    }
}

const server = new Server();