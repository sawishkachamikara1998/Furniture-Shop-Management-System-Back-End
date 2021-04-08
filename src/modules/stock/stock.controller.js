import Stock from "./stock.model";
import Product from "../products/product.model";
import HTTPStatus from "http-status";


export async function createstocklist(req, res) {
    try {
      const stock = await Stock.create(req.body);
      const body = {name: req.body.prodName, code: req.body.prodCode};
      const product = await Product.create(body);
      return res.status(HTTPStatus.CREATED).json({status: true, error: null});
    } catch (e) {
        const errorArray = [];
        errorArray.push({status:false, e})
        return res.status(HTTPStatus.OK).json(errorArray);
    }
  }

