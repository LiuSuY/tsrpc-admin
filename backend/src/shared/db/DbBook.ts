import { ObjectId } from "mongodb";

export interface DbBook {
  _id: ObjectId;
  title: string;
  author: string;
  price: number;
  total?: number;
  create: {
    time: Date;
    uid: string;
  };
  update?: {
    time: Date;
    uid: string;
  };
}
