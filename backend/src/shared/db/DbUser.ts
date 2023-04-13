import { ObjectId } from "mongodb";

export interface DbUser {
  _id: ObjectId;
  username: string;
  age: number;
  nickname?: string;
  password: string;
  roles?: Array<string>;
  create: {
    time: Date;
    uid: string;
  };

  update?: {
    time: Date;
    uid: string;
  };
}
