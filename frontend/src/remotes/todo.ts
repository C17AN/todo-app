import { supabaseClient } from "@/config/supabaseClient";
import { Todo } from "@/models/Todo";
import { useQuery } from "react-query";

export const listTodo = async () => {
  const { data, error } = await supabaseClient.from("Todo").select("*");
  if (error) throw { status: error.code, message: error.message };
  else return data;
};

export const useListTodo = () => {
  return useQuery("listTodo", listTodo);
};

export const uploadTodo = async ({ title, description }: Todo) => {
  const { data, error } = await supabaseClient
    .from("Todo")
    .insert<Todo>([{ title, description }]);

  if (error) throw { status: error.code, message: error.message };
  else return data;
};
