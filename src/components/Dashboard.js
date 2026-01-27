import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let data = {
    name: "Mayur thakur",
  };
  let navigate = useNavigate();
  return (
    <>
      <h1>Dashboard Page</h1>
      <button
        type="button "
        class="btn btn-primary"
        onClick={() => {
          navigate("/logout", { state: data });
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Dashboard;
