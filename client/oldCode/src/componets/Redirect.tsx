import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export const Redirect = ({ children }: any) => {
    const {location} = useParams();
    // console.log(location);
    if(location===undefined){
        return <Navigate to="/pune" />
    }
    // /<Navigate to="/pune" />
  return children;
};