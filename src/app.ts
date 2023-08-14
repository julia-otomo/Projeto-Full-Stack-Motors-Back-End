import express, { json } from "express";
import "reflect-metadata";
import "express-async-errors";
import cors from "cors";

import routes from "./routers";
import middlewares from "./middlewares";

const app = express();
app.use(json());
app.use(cors({}));

app.use("/salesAd", routes.salesAd);

app.use(middlewares.handleError);

export default app;
