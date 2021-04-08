import Order from './order.model';
import User from '../users/user.model';
import HTTPStatus from "http-status";

export async function createOrder(req,res) {
    try {
        console.log(req.body);
        //const user = await User.findOne({id: req.body.userId});
        const order = await Order.create({postalcode: 'ggggg', deliveryAdd: 'asddsadsadas', ...req.body });
        return res.status(HTTPStatus.CREATED).json(order.getValue());
      } catch (e) {
          const errorArray = [];
          errorArray.push({status:false,e})
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
      } 

}