import { ApiCall } from "tsrpc";
import { Global } from "../../db";
import { DbBook } from "../../shared/db/DbBook";
import { ReqAdd, ResAdd } from "../../shared/protocols/book/PtlAdd";

export default async function (call: ApiCall<ReqAdd, ResAdd>) {
    const op = await Global.db.collection<DbBook>('Book').insertOne({
        ...call.req.book,
        create:{
            time: new Date(),
            uid: 'admin'
        }

    })

    call.succ({
        _id: op.insertedId
    })
}