import { Navigate } from "react-router-dom";
import { useContextData } from "../context/context";
export const AuthRequired = ({ children }: any) => {
  const { authData } = useContextData();
  if (!authData.auth) {
    return <Navigate to="/login" />;
  }

  return children;
};
//AuthRequired
