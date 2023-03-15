import { DbUser } from "../../db/DbUser";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqGet extends BaseRequest {
    
}

export interface ResGet extends BaseResponse {
    users: DbUser[]
}

export const conf: BaseConf = {
    
}