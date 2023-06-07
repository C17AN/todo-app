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
  point?: number;
};

// 포인트 (예시)
// 월 300점이 유저에게 부여된다.
// 일정당 최대 10포인트를 부여할 수 있다.
