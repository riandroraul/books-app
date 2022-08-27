import { Navigate } from "react-router-dom";

const ProtectedRoutes = (props) => {
  const token = localStorage.getItem("token");
  const userLogin = localStorage.getItem("userLogin");
  if (!token || !userLogin) {
    return <Navigate to="/login" />;
  }
  return props.children;
};

export default ProtectedRoutes;
