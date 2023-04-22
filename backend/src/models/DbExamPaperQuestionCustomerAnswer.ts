export interface DbExamPaperQuestionCustomerAnswer {
  id: string;
  questionId: string;
  examPaperId: string;
  examPaperAnswerId: string;
  questionType: number;
  subjectId: number;
  customerScore: number;
  questionScore: number;
  questionTextContentId: string;
  answer: string;
  textContentId: string;
  doRight: Boolean;
  create: {
    User: string;
    Time: Date;
  };
  itemOrder: number;
}
