export interface DbTaskExamCustomerAnswer {
  id: string;
  taskExamId: string;
  create: {
    User: string;
    Time: Date;
  };
  textContentId: string;
}
