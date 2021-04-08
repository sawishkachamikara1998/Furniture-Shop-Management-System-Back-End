import Feedback from './feedback.model'
import HTTPStatus from "http-status";


export async function createfeedback(req, res) {
    try {
        console.log(req.body)
        const feedback = await Feedback.create(req.body);
        return res.status(HTTPStatus.CREATED).json(feedback);
    } catch (e) {
        const errorArray = [];
        errorArray.push({ status, e })
        return res.status(HTTPStatus.BAD_REQUEST).json(errorArray);
    }
}
