export interface DbQuestion {
  id: string;
  questionType: string;
  subjectId: string;
  score: string;
  gradeLevel: string;
  difficult: string;
  correct: string;
  infoTextContentId: string;
  createUser: string;
  status: number;
  createTime: Date;
  deleted: boolean;
}
