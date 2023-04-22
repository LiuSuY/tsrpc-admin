export interface DbExamPaperAnser {
  id: string;
  examPaperId: string;
  paperName: string;
  paperType: number;
  subjectId: string;
  systemScore: number;
  userScore: number;
  paperScore: number;
  questionCorrect: number;
  questionCount: number;
  doTime: number;
  status: number;
  create: {
    User: string;
    Time: Date;
  };
  taskExamId: string;
}
