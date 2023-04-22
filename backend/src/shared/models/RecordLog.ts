import { ObjectId } from "mongodb";

export interface RecordLog {
  _id: ObjectId;
  title: string;
  startTime: Date;
  endTime: Date;
}
