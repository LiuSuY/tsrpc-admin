export interface User {
  _id: string;
  userUuid: string;
  userName: string;
  passWord: string;
  realName: string;
  age: number;
  sex: string;
  birthDay: string;
  userLevel: number;
  phone: string;
  role: string;
  status: number;
  imagePath: string;
  createTime: Date;
  modifyTime: Date;
  lastActiveTime: Date;
  deleted: boolean;
  wxOpenId: string;
}
