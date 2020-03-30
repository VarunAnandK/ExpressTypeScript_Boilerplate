
import * as errorHandler from "errorhandler";
import { createConnection } from "typeorm";
import app from "./app";
import * as dotenv from 'dotenv';
dotenv.config();
/**
 * Error Handler. Provides full stack - remove for production
 */
let server: any;


createConnection().then(connection => {
    app.use(errorHandler());
    const server = app.listen(app.get("port"), () => {
        console.log(" App is running at http://localhost:%d in %s mode", app.get("port"), app.get("env"));
        console.log("Press CTRL-C to stop\n");
    });
}).catch(error => console.log(error));
export default server;