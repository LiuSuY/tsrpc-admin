import { DbRecordLog } from "../../db/DbRecordLog";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqGet extends BaseRequest {}

export interface ResGet extends BaseResponse {
  records: DbRecordLog[];
}

export const conf: BaseConf = {};
