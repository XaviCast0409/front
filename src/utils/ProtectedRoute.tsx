
import { Navigate } from "react-router-dom";
interface ProtectedRouterProps{
  token?: string | null;
  isAdmin: boolean;
  redirectPath: string;
}


export const ProtectedRouter: React.FC<ProtectedRouterProps> = ({ token, isAdmin, redirectPath }) => { 
  if (!token && !isAdmin) {
    return <Navigate to={redirectPath} replace />;
  }
};
