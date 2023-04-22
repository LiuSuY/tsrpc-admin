import { ApiCall } from "tsrpc";
import { Global } from "../../Global";
import { RecordLog } from "../../shared/models/RecordLog";
import { ReqGet, ResGet } from "../../shared/protocols/recordLog/PtlGet";

export default async function (call: ApiCall<ReqGet, ResGet>) {
    let rs = await Global.db.collection<RecordLog>("RecordLog").find({}).toArray();
    call.succ({
        records: rs,
    });
}