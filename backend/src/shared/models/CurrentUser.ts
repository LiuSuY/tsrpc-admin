import { ObjectId } from "mongodb";

export interface CurrentUser {
    _id: ObjectId,
    username: string,
    roles: string[]
}