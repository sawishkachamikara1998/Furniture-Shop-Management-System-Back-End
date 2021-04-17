import { Router } from "express";

import * as branchController from "./branch.controller";

const routes = new Router();

routes.post("/create", branchController.createBranch);

routes.get("/getAll", branchController.getAllBranches);

export default routes;