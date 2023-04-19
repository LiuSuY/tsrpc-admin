import { ApiCall } from "tsrpc";
import { Global } from "../../models/Global";
import { DbRecordLog } from "../../shared/db/DbRecordLog";
import { ReqGet, ResGet } from "../../shared/protocols/recordLog/PtlGet";

export default async function (call: ApiCall<ReqGet, ResGet>) {
    let rs = await Global.db.collection<DbRecordLog>("RecordLog").find({}).toArray();
    call.succ({
        records: rs,
    });
}