import { ApiCall } from "tsrpc";
import { Global } from "../../db";
import { ReqDel, ResDel } from "../../shared/protocols/book/PtlDel";

export default async function (call: ApiCall<ReqDel, ResDel>) {
    const {_id} = call.req;
    let rt = await Global.db.collection('Book').deleteOne({_id});
    call.succ({
        deletedCount:rt.deletedCount
    })
}