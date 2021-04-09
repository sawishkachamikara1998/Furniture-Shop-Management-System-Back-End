import { Router } from "express";

import * as orderController from "./order.controller";

const routes = new Router();


routes.post("/create",  orderController.createOrder)
//router.post("/edit",orderController.editOrder)

export default routes;   