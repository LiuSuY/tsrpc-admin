export interface DbMessageUser {
  id: string;
  messageId: string;
  receiveUserId: string;
  receiveUserName: string;
  receiveRealName: string;
  readed: Boolean;
  createTime: Date;
  readTime: Date;
}
