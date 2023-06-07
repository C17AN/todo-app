import { Todo } from "./Todo";

export type Project = {
  title: string;
  description?: string;
  goalText?: string;
  todoList?: Todo[] | null;
};
