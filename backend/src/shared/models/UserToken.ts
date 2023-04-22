export interface DbUserToken {
  id: string;
  token: string;
  userId: string;
  wxOpenId: string;
  createTime: Date;
  endTime: Date;
  userName: string;
}
