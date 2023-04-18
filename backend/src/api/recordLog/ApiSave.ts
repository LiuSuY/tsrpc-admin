import { ObjectId } from "mongodb";
import { ApiCall } from "tsrpc";
import { Global } from "../../db";
import { DbRecordLog } from "../../shared/db/DbRecordLog";
import { ReqSave, ResSave } from "../../shared/protocols/recordLog/PtlSave";

export default async function (call: ApiCall<ReqSave, ResSave>) {

    let rs = await Global.db.collection<DbRecordLog>("RecordLog").insertOne({
        ...call.req.recordLog
    })
    rs&&call.succ({});
    
}