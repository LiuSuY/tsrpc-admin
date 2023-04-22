export interface DbTaskExam {
  id: string;
  title: string;
  gradeLevel: string;
  frameTextContentId: string;
  create: {
    User: string;
    Time: Date;
  };
  deleted: boolean;
  createUserName: string;
}
