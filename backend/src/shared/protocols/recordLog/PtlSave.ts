import { RecordLog } from "../../models/RecordLog";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqSave extends BaseRequest {
  recordLog: Pick<RecordLog, "startTime" | "title">;
}

export interface ResSave extends BaseResponse {}

export const conf: BaseConf = {
  needLogin: true,
};
