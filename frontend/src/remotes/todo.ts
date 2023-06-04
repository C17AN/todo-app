import { supabaseClient } from "@/config/supabaseClient";
import { Todo } from "@/models/Todo";
import { useQuery } from "react-query";

export const listTodo = async () => {
  const { data, error } = await supabaseClient.from("Todo").select("*");
  if (error) throw { status: error.code, message: error.message };
  else return data;
};

export const useListTodo = () => {
  return useQuery("listTodo", listTodo, {
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
    placeholderData: [],
  });
};

export const uploadTodo = async ({ title, description, category }: Todo) => {
  const { data, error } = await supabaseClient
    .from("Todo")
    .insert<Todo>([{ title, description, category }]);

  if (error) throw { status: error.code, message: error.message };
  else return data;
};
