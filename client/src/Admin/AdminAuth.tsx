import { Navigate } from "react-router-dom";
import {useAdminAuth} from '../context/Admin';
export const AdminAuth = ({ children }: any) =>{
    const {adminAuthData} = useAdminAuth();
    if (!adminAuthData.auth) {
        return <Navigate to="/admin" />;
    }
    
    return children;
}