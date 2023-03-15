import { DbUser } from "../../db/DbUser";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqDel extends BaseRequest {
    _id: DbUser['_id']
}

export interface ResDel extends BaseResponse {
    deletedCount: number
}

export const conf: BaseConf = {
    
}