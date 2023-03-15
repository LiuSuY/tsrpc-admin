import { ApiCall } from "tsrpc";
import { Global } from "../../db";
import { DbUser } from "../../shared/db/DbUser";
import { ReqDel, ResDel } from "../../shared/protocols/user/PtlDel";

export default async function (call: ApiCall<ReqDel, ResDel>) {
    let _id = call.req._id;
    let {deletedCount} = await Global.db.collection<DbUser>('User').deleteOne({_id})
    call.succ({
        deletedCount:deletedCount
    })
}