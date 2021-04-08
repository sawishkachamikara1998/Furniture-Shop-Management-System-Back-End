import { Router } from "express";
import * as stockcontroller from "./stock.controller";

const routes = new Router();

routes.post ("/addstocklist", stockcontroller.createstocklist)

export default routes;