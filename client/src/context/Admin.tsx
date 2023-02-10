import React, { createContext, useContext, useState } from "react";

interface authMetaData {
  auth: boolean;
  username: string;
}
type contextType = {
  adminAuthData: authMetaData;

  adminAuthUpdate: (auth: authMetaData) => void;
};

const Context = createContext<contextType | null>(null);
interface props {
  children?: React.ReactNode;
}
const AdminProvider = ({ children }: props) => {
  const [adminAuthData, setAuth] = useState<authMetaData>({
    auth: false,
    username: ""
  });
  const adminAuthUpdate = (adminAuthData: any) => {
    setAuth(adminAuthData); 
  };

  return (
    <Context.Provider value={{ adminAuthData, adminAuthUpdate }}>
      {children}
    </Context.Provider>
  );
};

const useAdminAuth = () => {
  const context = useContext(Context);
  if (!context) throw new Error("Out Of Context Provider");
  return context;
};

export { AdminProvider, useAdminAuth };
