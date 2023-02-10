import React, { createContext, useContext, useState } from "react";

interface authMetaData {
  auth: boolean;
  username: string;
}
type contextType = {
  authData: authMetaData;

  updateAuth: (auth: authMetaData) => void;
};

const Context = createContext<contextType | null>(null);
interface props {
  children?: React.ReactNode;
}
const ContextProvider = ({ children }: props) => {
  const [authData, setAuth] = useState<authMetaData>({
    auth: false,
    username: ""
  });
  const updateAuth = (authData: any) => {
    setAuth(authData);
  };

  return (
    <Context.Provider value={{ authData, updateAuth }}>
      {children}
    </Context.Provider>
  );
};

const useContextData = () => {
  const context = useContext(Context);
  if (!context) throw new Error("Out Of Context Provider");
  return context;
};

export { ContextProvider, useContextData };
