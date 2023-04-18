import { ObjectId } from "mongodb";

export interface DbRecordLog {
  _id?: ObjectId;
  title: string,
  startTime: Date;
  endTime?: Date;
}
