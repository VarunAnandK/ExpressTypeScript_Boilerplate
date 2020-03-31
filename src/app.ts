import * as express from 'express';
const app: express.Application = express();
import * as bodyParser from 'body-parser';
import * as compression from "compression";
import { AppRoutes } from './Router';
import * as cors from 'cors';
import { getRepository, getManager } from 'typeorm';
import { user } from './Database/Table/user';
import errorHandler = require('errorhandler');

//Api token validation
var ApiTockenValidation = async function (req: express.Request, res: express.Response, next) {
    if (req.headers["authorization"]) { // check authorization is send by other application
        //check the token in database 
        const UserRepository = getManager().getRepository(user);
        const User = await UserRepository.findAndCount({ where: { api_token: req.headers["authorization"] } });
        //check the token in database 
        if (User[1] > 0) {
            next(); // token valid allow the perform the request
        }
        else {
            res.send({ Type: 'E', Message: "Not Valid api" }); // send invalid request 
        }
    }
    else {
        res.send({ Type: 'E', Message: "Not Valid api" }); // send invalid request 
    }
}
//Api token validation

app.use(cors()); // used for call the api from any device or application
app.use(compression()); // used for compress the request and response
app.use(bodyParser.json()); // user to convert the request as json format
//app.use(ApiTockenValidation); // used to validate the api token
app.use(errorHandler()); // user for log the error 


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