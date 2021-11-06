import { createContext, ReactNode, useContext, useState } from "react";
import { ResponsePostLogin } from "./users.d";


const LoginContext = createContext<{ loginStatus: ResponsePostLogin, setLoginStatus: Function }>({ loginStatus: {}, setLoginStatus: () => { } });
function useLoginContext() {
  const context = useContext(LoginContext);

  return context;
}
function LoginProvider({ children }: { children: ReactNode }) {
  const [loginStatus, setLoginStatus] = useState<ResponsePostLogin>({});

  return <LoginContext.Provider
    value={{ loginStatus, setLoginStatus }}
  >
    {children}
  </LoginContext.Provider>
}

export { useLoginContext, LoginProvider };