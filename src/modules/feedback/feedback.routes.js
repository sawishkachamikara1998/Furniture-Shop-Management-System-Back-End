import { Router } from "express";

import * as feedbackControl from "./feedback.controller";

const routes = new Router();

routes.post("/create",feedbackControl.createfeedback )

export default routes;