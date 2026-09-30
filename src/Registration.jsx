import React, {useState} from "react"; 
import {  useNavigate } from "react-router-dom"; 
import Form from "./components/Form";


// create a Registration component 
const Registration = () => 
{

  const navigate = useNavigate();

  const handleRegistration = () => 
  {
    navigate("/registration"); 
    return (<Form />)
  }

  return (
    <div>
       <button
        onClick={handleRegistration}
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
        Registration
      </button> 
    </div>
  )



};export default Registration;