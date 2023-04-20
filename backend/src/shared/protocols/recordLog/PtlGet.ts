import { DbRecordLog } from "../../db/DbRecordLog";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqGet extends BaseRequest {}

export interface ResGet extends BaseResponse {
  records: Array<Partial<Pick<DbRecordLog,'endTime'>>&Omit<DbRecordLog, 'endTime'>>;
}

export const conf: BaseConf = {
  needLogin: true,
};
