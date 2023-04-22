export interface DbMessage {
  id: string;
  title: string;
  content: string;
  createTime: Date;
  sendUserId: string;
  sendUserName: string;
  sendRealName: string;
  receiveUserContent: number;
  readCount: number;
}
