import { Router } from "express";
import { validate } from "express-validation";
import { authJwt } from "../../services/auth.services";

import * as productController from "./product.controller";
import productValidation from "./product.validator";

const routes = new Router();

routes.post(
  "/create",
  productController.createProduct
);

routes.get(
    "/getAll",
    productController.getAllProducts
);

routes.get(
    "/:id",
    productController.getProductById
);



export default routes;
