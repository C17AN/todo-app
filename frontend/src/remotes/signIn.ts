import { supabaseClient } from "@/config/supabaseClient";

export type SignInParams = {
  email: string;
  password: string;
};

export const signIn = async ({ email, password }: SignInParams) => {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw { status: error.status, message: error.message };
  else return data;
};
