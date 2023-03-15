import { ApiCall } from "tsrpc";
import { Global } from "../../db";
import { DbUser } from "../../shared/db/DbUser";
import { ReqEdit, ResEdit } from "../../shared/protocols/user/PtlEdit";

export default async function (call: ApiCall<ReqEdit, ResEdit>) {
  let { _id, ...rest } = call.req.user;
  let op = await Global.db.collection<DbUser>("User").updateOne(
    {
      _id,
    },
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

  call.succ({
    data: op,
  });
}
