import { supabaseClient } from "@/config/supabaseClient";
import { Session, User } from "@supabase/supabase-js";
import {
  useEffect,
  createContext,
  useState,
  ReactNode,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";

interface CustomUser extends User {
  user_metadata: {
    name: string;
  };
}

interface CustomSession extends Session {
  user: CustomUser;
}

export const SessionContext = createContext<{ session: CustomSession | null }>({
  session: null,
});

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const session = useSession();

  return (
    <SessionContext.Provider value={{ session }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const { session: currentSession } = useContext(SessionContext);
  const navigate = useNavigate();
  const [session, setSession] = useState<CustomSession | null>(null);

  const checkSession = async () => {
    const { data, error } = await supabaseClient.auth.getSession();
    if (error) throw error;
    else {
      if (!data.session) {
        navigate("/signIn");
        return;
      } else {
        setSession(() => data?.session as CustomSession);
      }
    }
  };

  useEffect(() => {
    if (currentSession) return;
    checkSession();
  }, []);

  return currentSession ?? session;
};
