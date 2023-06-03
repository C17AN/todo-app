import { useMutation } from "react-query";
import { supabaseClient } from "@/config/supabaseClient";
import { AuthResponse } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

export type SignUpParams = {
  email: string;
  name: string;
  password: string;
};

export const signUp = async ({ email, name, password }: SignUpParams) => {
  supabaseClient.auth
    .signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    })
    .then((res: AuthResponse) => {
      console.log(res.data);
    })
    .catch((err: AuthResponse) => {
      console.log(err.error?.message);
      throw new Error(err.error?.message);
    });
};

export const useSignUp = () => {
  const navigate = useNavigate();
  return useMutation("signUp", signUp, {
    onSuccess(data, variables, context) {
      () => navigate("/");
    },
  });
};
