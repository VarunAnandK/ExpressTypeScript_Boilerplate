import * as express from 'express';
const app: express.Application = express();
import * as bodyParser from 'body-parser';
import * as compression from "compression";
import { AppRoutes } from './Router';

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
app.use(compression());
app.use(bodyParser.json());

export default app;