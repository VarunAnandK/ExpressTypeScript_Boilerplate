import * as express from 'express';
const app : express.Application = express();
import * as bodyParser from 'body-parser';
import * as compression from "compression";
import { AppRoutes } from './Router';


AppRoutes.forEach(route => {
    if(route.method == "get")
    {
        app.get(route.path, route.action);
    }
    else if(route.method == "post")
    {
        app.post(route.path, route.action);
    }
});


app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());

export default app;