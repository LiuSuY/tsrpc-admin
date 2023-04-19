import { ObjectId } from "mongodb";
import { ApiCall } from "tsrpc";
import { Global } from "../../models/Global";
import { DbRecordLog } from "../../shared/db/DbRecordLog";
import {
  ReqUpdate,
  ResUpdate,
} from "../../shared/protocols/recordLog/PtlUpdate";

export default async function (call: ApiCall<ReqUpdate, ResUpdate>) {
  const { _id } = call.req.recordLog;
  if (!_id) {
    call.error("_id is empty");
    return;
  }
  let rs = await Global.db.collection<DbRecordLog>("RecordLog").updateOne(
    { _id: new ObjectId(_id) },
    {
      $set: {
        endTime: new Date(),
      },
    }
  );
  rs && call.succ({});
}
