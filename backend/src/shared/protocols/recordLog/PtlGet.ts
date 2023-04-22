import { RecordLog } from "../../models/RecordLog";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqGet extends BaseRequest {}

export interface ResGet extends BaseResponse {
  records: Array<Partial<Pick<RecordLog,'endTime'>>&Omit<RecordLog, 'endTime'>>;
}

export const conf: BaseConf = {
  needLogin: true,
};
