import { Router } from "express";
import { validate } from "express-validation";
import { authJwt } from "../../services/auth.services";

import * as deliveryController from "./delivery.controller";
import deliveryValidation from "./delivery.validator";

const routes = new Router();

routes.post(
  "/create",
  deliveryController.createDelivery
);

routes.get(
    "/getAll",
    deliveryController.getAllDeliveryItems
);

routes.get(
    "/:id",
    deliveryController.getAllDeliveryItemsById
);



export default routes;
