import { ObjectId } from "mongodb";

export interface CurrentUser {
    uid: ObjectId,
    username: string,
    roles: string[]
}