import { ObjectId } from "mongodb";
import { ApiCall } from "tsrpc";
import { Global } from "../../Global";
import { RecordLog } from "../../shared/models/RecordLog";
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
  let rs = await Global.db.collection<RecordLog>("RecordLog").updateOne(
    { _id: new ObjectId(_id) },
    {
      $set: {
        endTime: new Date(),
      },
    }
  );
  rs && call.succ({});
}
