import { DbBook } from "../../db/DbBook";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqAdd extends BaseRequest {
  book: Pick<DbBook, "title" | "author" | "price">;
}

export interface ResAdd extends BaseResponse {
  _id: DbBook["_id"];
}

export const conf: BaseConf = {};
