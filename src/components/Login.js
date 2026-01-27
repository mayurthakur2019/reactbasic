import React from "react";
import { useLocation } from "react-router-dom";

const Login = () => {
  let location = useLocation();
  return (
    <>
      <h1>Login Page {location.state.status}</h1>
    </>
  );
};

export default Login;
