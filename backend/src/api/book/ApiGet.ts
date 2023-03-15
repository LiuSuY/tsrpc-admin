import { ApiCall } from "tsrpc";
import { Global } from "../../db";
import { DbBook } from "../../shared/db/DbBook";
import { ReqGet, ResGet } from "../../shared/protocols/book/PtlGet";

export default async function (call: ApiCall<ReqGet, ResGet>) {
  let rs = await Global.db.collection<DbBook>("Book").find({}).toArray();
  call.succ({
    books: rs,
  });
}
