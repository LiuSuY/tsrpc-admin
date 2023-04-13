import { DbUser } from "../../db/DbUser";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqEdit extends BaseRequest {
  user: Pick<DbUser, "_id"> & Partial<Pick<DbUser, "username" | "age">>;
}

export interface ResEdit extends BaseResponse {
  data: any
}

export const conf: BaseConf = {};
