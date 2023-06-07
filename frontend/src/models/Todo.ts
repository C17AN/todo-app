export type TodoCategory = "생활" | "취미" | "학습";
export type TodoType = "일반" | "중요" | "긴급";

export type Todo = {
  id?: string;
  title: string;
  description: string;
  type: TodoType;
  category: TodoCategory;
  priority?: number;
  complete?: boolean;
  createdAt?: string;
  updatedAt?: string;
  deadline?: Date;
};
