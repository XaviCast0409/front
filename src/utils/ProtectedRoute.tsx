
import { Navigate } from "react-router-dom";
interface ProtectedRouterProps{
  redirectPath: string;
  isLoggedIn: boolean;
  adminRedirectPath: string;
  loginCompany: { token: string }
}


export const ProtectedRouter: React.FC<ProtectedRouterProps> = ({ redirectPath, isLoggedIn, loginCompany, adminRedirectPath }) => {
  const validateToken = decodeToken(loginCompany.token)
  
  if (!isLoggedIn && !validateToken?.isAdmin) {
    return <Navigate to={redirectPath} replace />;
  }
  if (!isLoggedIn && validateToken?.isAdmin) {
    return <Navigate to={adminRedirectPath} replace />;
  }
};

const decodeToken = (token: string) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const decodedToken = JSON.parse(atob(base64));

    return {
      isAdmin: decodedToken.isAdmin ,
      id: decodedToken.id
    };
  } catch (error) {
    console.error('Error al decodificar el token:', error);
    return null;
  }
};
