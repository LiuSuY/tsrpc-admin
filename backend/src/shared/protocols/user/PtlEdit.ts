import { DbUser } from "../../db/DbUser";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqEdit extends BaseRequest {
  user: Pick<DbUser, "_id"> & Partial<Pick<DbUser, "name" | "age">>;
}

export interface ResEdit extends BaseResponse {}

export const conf: BaseConf = {};
