import { DbRecordLog } from "../../db/DbRecordLog";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqSave extends BaseRequest {
    recordLog: Omit<DbRecordLog,'_id'|'endTime'>
}

export interface ResSave extends BaseResponse {
    
}

export const conf: BaseConf = {
    
}