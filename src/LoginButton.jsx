import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login"); // goes to the login page
  };

  return (
    <div className="container">
      <button
        onClick={handleLogin}
        style={{
          background: "green",
          borderRadius: "20px",
          border: "1px solid yellow",
          padding: "10px 20px",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Button;