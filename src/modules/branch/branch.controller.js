import Branch from './branch.model';
import HTTPStatus from "http-status";

export async function createBranch(req, res) {
    try{
        const branch = await Branch.create(req.body);
        return res.status(HTTPStatus.CREATED).json(branch);
    }catch(e){
        const errorArray = [];
        errorArray.push({status:false, e})
        return res.status(HTTPStatus.OK).json(errorArray);
    }
}

export async function getAllBranches(req, res) {
    try{
        const branches = await Branch.find({});
        return res.status(HTTPStatus.CREATED).json(branches);
    }
    catch(e){
        const errorArray = [];
        errorArray.push({status:false, e})
        return res.status(HTTPStatus.OK).json(errorArray);
    }
}