export type TodoCategory = "생활" | "취미" | "학습";

export type Todo = {
  title: string;
  description: string;
  priority: number;
  category: TodoCategory;
};
