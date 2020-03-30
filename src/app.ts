import * as express from 'express';
const app: express.Application = express();
import * as bodyParser from 'body-parser';
import * as compression from "compression";
import { AppRoutes } from './Router';
import * as cors from 'cors';
import { getRepository, getManager } from 'typeorm';
import { user } from './Database/Table/user';
import errorHandler = require('errorhandler');



var ApiTockenValidation = async function (req: express.Request, res: express.Response, next) {
    // if (req.headers["authorization"]) {
    //     const UserRepository = getManager().getRepository(user);
    //     const User = await UserRepository.findAndCount({ where: { api_token: req.headers["authorization"] } });
    //     if (User[1] > 0) {
    //         next();
    //     }
    //     else {
    //         res.send({ Type: 'E', Message: "Not Valid api" });
    //     }
    // }
    // else {
    //     res.send({ Type: 'E', Message: "Not Valid api" });
    // }
    next();
}

app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(ApiTockenValidation);
app.use(errorHandler());


//Initialize the all router
AppRoutes.forEach(route => {
    if (route.method == "get") {
        app.get("/api/" + route.path, route.action);
    }
    else if (route.method == "post") {
        app.post("/api/" + route.path, route.action);
    }
});
//Initialize the all router

//Get selected port from the iis if not default set to 8000
app.set("port", process.env.PORT || 8000);
//Get selected port from the iis if not default set to 8000

export default app;