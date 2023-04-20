import { ObjectId } from "mongodb";

export interface DbUser {
  _id: ObjectId,
  userUuid: ObjectId,
  userName: string,
  passWord: string,
  realName: string,
  age: number,
  sex: string,
  birthDay: string,
  userLevel: number,
  phone: string,
  role: string,
  status: number,
  imagePath: string,
  createTime: Date,
  modifyTime: Date,
  lastActiveTime: Date,
  deleted: boolean,
  wxOpenId: string
}
