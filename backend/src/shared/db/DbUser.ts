import { ObjectId } from "mongodb";

export interface DbUser {
  id: string,
  userUuid: string,
  userName: string,
  passWord: string,
  realName: string,
  age: number,
  sex: number,
  birthDay: Date,
  userLevel: number,
  phone: string,
  role: number,
  status: number,
  imagePath: string,
  createTime: Date,
  modifyTime: Date,
  lastActiveTime: Date,
  deleted: boolean,
  wxOpenId: string
}
