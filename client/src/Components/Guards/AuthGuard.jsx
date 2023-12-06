import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import Path from "../../paths";

function AuthGuard(props) {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to={Path.Login} />;
  }

  return <Outlet />;
}

export default AuthGuard;
