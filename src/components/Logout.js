import React from "react";
import { useLocation } from "react-router-dom";

const Logout = () => {
  let location = useLocation();
  return (
    <>
      <h1>Logout Page</h1>
      <h5>{location.state.name}</h5>
    </>
  );
};

export default Logout;
