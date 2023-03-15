import { DbBook } from "../../db/DbBook";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqDel extends BaseRequest {
    _id: DbBook['_id']
}

export interface ResDel extends BaseResponse {
    deletedCount: number
}   

export const conf: BaseConf = {
    
}