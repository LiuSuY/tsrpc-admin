export interface DbUserEventLog {
  id: string;
  userId: string;
  userName: string;
  realName: string;
  content: string;
  createTime: Date;
}
