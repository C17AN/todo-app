import { supabaseClient } from "@/config/supabaseClient";

export type SignUpParams = {
  email: string;
  name: string;
  password: string;
};

export const signUp = async ({ email, name, password }: SignUpParams) => {
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });
  if (error) throw error;
  return data;
};
