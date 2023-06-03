import { supabaseClient } from "@/config/supabaseClient";
import { Session } from "@supabase/supabase-js";
import { useEffect, createContext, useState } from "react";

export const SessionContext = createContext<Session | null>(null);

export const SessionProvider = ({ children }) => {
  return (
    <SessionContext.Provider value={supabaseClient.auth.session()}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const [session, setSession] = useState<Session>();

  const checkSession = async () => {
    const { data, error } = await supabaseClient.auth.getSession();
    if (error) throw error;
    else {
      setSession(() => data.session);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return session;
};
