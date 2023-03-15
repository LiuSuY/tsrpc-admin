import { DbBook } from "../../db/DbBook";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqGet extends BaseRequest {
    
}

export interface ResGet extends BaseResponse {
       books: DbBook[]
}

export const conf: BaseConf = {
    
}