import { ObjectId } from "mongodb";
import { Overwrite } from "tsrpc";
import { User } from "../shared/models/User";

export type DbUser = Overwrite<
  User,
  {
    _id: ObjectId;
    userUuid: ObjectId;
    wxOpenId: ObjectId;
  }
>;
