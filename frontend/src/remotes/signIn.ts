import { UseMutationOptions, useMutation } from "react-query";
import { supabaseClient } from "@/config/supabaseClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export type SignInParams = {
  email: string;
  password: string;
};

export const signIn = async ({ email, password }: SignInParams) => {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  else return data;
};

export const useSignIn = ({ onSuccess, onError }: UseMutationOptions) => {
  const navigate = useNavigate();
  return useMutation("signIn", signIn, {
    onSuccess(data, variables, context) {
      () => navigate("/");
    },
    onError(error) {
      toast.error("로그인에 실패했습니다.");
      console.error(error);
    },
  });
};
