import { ApiCall } from "tsrpc";
import { Global } from "../../db";
import { DbUser } from "../../shared/db/DbUser";
import { ReqAdd, ResAdd } from "../../shared/protocols/user/PtlAdd";

export default async function(call: ApiCall<ReqAdd, ResAdd>) {
    let op = await Global.db.collection<DbUser>('User').insertOne({ 
        ...call.req.user,
        create: {
            time: new Date(),
            uid: 'admin'
        }
    })

    call.succ({
        _id: op.insertedId
    })
}