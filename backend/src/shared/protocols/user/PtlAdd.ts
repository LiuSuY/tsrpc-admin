import { DbUser } from "../../db/DbUser";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqAdd extends BaseRequest {
  user: Pick<DbUser,'age'| 'name'| 'role'>;
}

export interface ResAdd extends BaseResponse {
    _id: DbUser['_id']
}

export const conf: BaseConf = {};
