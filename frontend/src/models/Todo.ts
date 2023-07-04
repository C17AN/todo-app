export type TodoCategory = "생활" | "취미" | "학습";
export type TodoType = "일반" | "중요" | "긴급";
export type Tag = "약속" | "계획" | "일정";

export enum Priority {
  매우_낮음 = 1,
  낮음,
  보통,
  높음,
  매우_높음,
}

export type Todo = {
  id?: string;
  title: string;
  description: string;
  type: TodoType;
  category: TodoCategory;
  priority?: Priority;
  complete?: boolean;
  place?: string;
  createdAt?: string;
  updatedAt?: string;
  deadline?: Date;
  point?: number;
  tag?: Tag;
};

// 포인트 (예시)
// 월 300점이 유저에게 부여된다.
// 일정당 최대 10포인트를 부여할 수 있다.
