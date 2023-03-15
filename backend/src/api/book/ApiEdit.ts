import { ApiCall } from "tsrpc";
import { Global } from "../../db";
import { DbBook } from "../../shared/db/DbBook";
import { ReqEdit, ResEdit } from "../../shared/protocols/book/PtlEdit";

export default async function (call: ApiCall<ReqEdit, ResEdit>) {
  let { _id, ...rest } = call.req.book;
  let rs = await Global.db.collection<DbBook>("Book").updateOne(
    { _id },
    {
      $set: {
        ...rest,
        update: {
          time: new Date(),
          uid: "admin",
        },
      },
    }
  );
  console.log(rs);

  call.succ({
    msg: rs?"更新成功": '更新失败',
  });
}
