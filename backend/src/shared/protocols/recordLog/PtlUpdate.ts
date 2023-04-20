import { DbRecordLog } from "../../db/DbRecordLog";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqUpdate extends BaseRequest {
  recordLog: {
    _id: string;
  };
}

export interface ResUpdate extends BaseResponse {}

export const conf: BaseConf = {
  needLogin: true,
};
