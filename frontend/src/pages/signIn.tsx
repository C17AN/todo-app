import SignIn from "@/components/pages/signIn";
import { supabaseClient } from "@/config/supabaseClient";
import { useEffect } from "react";

const SignInPage = () => {
  return (
    <>
      <SignIn />
    </>
  );
};

export default SignInPage;
