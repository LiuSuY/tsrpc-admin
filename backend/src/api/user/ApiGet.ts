import { ApiCall } from "tsrpc";
import { Global } from "../../db";
import { DbUser } from "../../shared/db/DbUser";
import { ReqGet, ResGet } from "../../shared/protocols/user/PtlGet";

export default async function (call: ApiCall<ReqGet, ResGet>) {
    let users = await Global.db.collection<DbUser>('User').find({}).toArray();
    call.succ({
        users: users
    })

}