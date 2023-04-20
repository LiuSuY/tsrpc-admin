import { DbRecordLog } from "../../db/DbRecordLog";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqSave extends BaseRequest {
  recordLog: Pick<DbRecordLog, "startTime" | "title">;
}

export interface ResSave extends BaseResponse {}

export const conf: BaseConf = {
  needLogin: true,
};
