import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedContent = (props) => {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  console.log(userLogin.role);
  if (!userLogin) {
    return <Navigate to="/login" />;
  } else if (userLogin.role === 1) {
    return props.children;
  }
  return <Navigate to="/" />;
};

export default ProtectedContent;
