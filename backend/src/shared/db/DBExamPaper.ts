export interface DbExamPaper {
  id: string;
  name: string;
  subjectId: string;
  paperType: number;
  gradeLevel: number;
  score: number;
  questionCount: number;
  suggestTime: number;
  limitStatTime: Date;
  limitEndTime: Date;
  frameTextContentId: string;
  create: {
    User: string;
    Time: Date;
  };
  deleted: Boolean;
  taskExamId: string;
}
