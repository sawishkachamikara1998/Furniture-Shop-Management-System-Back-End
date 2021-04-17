import User from "./user.model";
import HTTPStatus from "http-status";

export async function signUp(req, res) {
  try {
    const user = await User.create(req.body);
    
    return res.status(HTTPStatus.CREATED).json(user.toAuthJSON());
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function login(req, res, next) {
  res.status(HTTPStatus.OK).json(req.user.toAuthJSON());
  return next();
}
