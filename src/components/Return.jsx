import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Return = () => { 



  const navigate = useNavigate();

  const handleGoBack = () => { 


    const userLog = localStorage.getItem("user");
    if(userLog){

    navigate("/");           // go to home page
          
    }else{
      navigate(-1);
    }
  };
  

  return (
    <button
      type="button"
      onClick={handleGoBack}
      style={{
        padding: "10px 20px",
        background: "#2e7d32",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      Назад
    </button>
  );
    };


export default Return;