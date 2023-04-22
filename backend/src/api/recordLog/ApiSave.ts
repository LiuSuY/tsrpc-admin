import { ApiCall } from "tsrpc";
import { Global } from "../../Global";
import { RecordLog } from "../../shared/models/RecordLog";
import { ReqSave, ResSave } from "../../shared/protocols/recordLog/PtlSave";

export default async function (call: ApiCall<ReqSave, ResSave>) {
  const { title, startTime } = call.req.recordLog;
  if (title === "") {
    call.error("title is empty");
    return;
  }

  let rs = await Global.db
    .collection<Omit<RecordLog, "endTime">>("RecordLog")
    .insertOne({
      title,
      startTime,
    });
  rs && call.succ({});
}
