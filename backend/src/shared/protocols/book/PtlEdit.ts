import { DbBook } from "../../db/DbBook";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqEdit extends BaseRequest {
  book: Pick<DbBook, "_id"> &
    Partial<Pick<DbBook, "author" | "price" | "title">>;
}
export interface ResEdit extends BaseResponse {
  msg: string;
}

export const conf: BaseConf = {};
