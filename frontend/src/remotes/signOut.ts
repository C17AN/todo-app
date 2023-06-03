import { useMutation } from "react-query";
import { supabaseClient } from "@/config/supabaseClient";
import { useNavigate } from "react-router-dom";

export const signOut = async () => {
  const { error } = await supabaseClient.auth.signOut();
};

export const useSignIn = () => {
  const navigate = useNavigate();
  return useMutation("signOut", signOut, {
    onSuccess() {
      () => navigate("/signIn");
    },
  });
};
