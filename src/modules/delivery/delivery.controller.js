import Delivery from "./delivery.model";
//import User from "../users/user.model";
import HTTPStatus from "http-status";

export async function createDelivery(req,res) {
    try{
        console.log(req.body);
        //console.log(delivery);
        const delivery = await Delivery.create(req.body);
        console.log("aa");
        return res.status(HTTPStatus.CREATED).json(delivery);
    }catch(e){
        const errorArray = [];
        errorArray.push({status:false, e})
        return res.status(HTTPStatus.BAD_REQUEST).json(errorArray);
    }   
}
/*
export async function getAllProducts(req, res) {
    try{
        const products = await Product.find({});
        return res.status(HTTPStatus.CREATED).json(products);
    }catch(e){
        const errorArray = [];
        errorArray.push({status:false, e})
        return res.status(HTTPStatus.BAD_REQUEST).json(errorArray);
    }
    
}

export async function getProductById(req, res) {
    try{
        console.log(req.params.id)
        const product = await Product.findOne({code: req.params.id});
        return res.status(HTTPStatus.CREATED).json(product);

    }catch(e){
        const errorArray = [];
        errorArray.push({status:false, e})
        return res.status(HTTPStatus.BAD_REQUEST).json(errorArray);
    }
}
*/

