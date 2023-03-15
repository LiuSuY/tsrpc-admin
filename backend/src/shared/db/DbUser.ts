import { ObjectId } from "mongodb";

export interface DbUser {
  _id: ObjectId,
  name: string,
  age: number,
  role: string,

  create: {
    time: Date,
    uid: string
  };

  update?: {
    time: Date,
    uid: string
  };
}
