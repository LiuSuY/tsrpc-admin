import { ObjectId } from "mongodb";
import { ApiCall } from "tsrpc";
import { Global } from "../../models/Global";
import { DbRecordLog } from "../../shared/db/DbRecordLog";
import { ReqSave, ResSave } from "../../shared/protocols/recordLog/PtlSave";

export default async function (call: ApiCall<ReqSave, ResSave>) {
  const { title, startTime } = call.req.recordLog;
  if (title === "") {
    call.error("title is empty");
    return;
  }

  let rs = await Global.db
    .collection<Omit<DbRecordLog, "endTime">>("RecordLog")
    .insertOne({
      title,
      startTime,
    });
  rs && call.succ({});
}
