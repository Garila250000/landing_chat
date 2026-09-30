import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { createClient } from "@supabase/supabase-js"; 
import Return from "./Return";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [userSubname, setUserSubname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); 
  const [problem, setProblem] = useState(""); 
  const [solution, setSolution] = useState(""); 
  const [answer, setAnswer] = useState("");

  // Supabase client (create once outside the function if possible) 
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL; 
  const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
  const supabase =    supabaseUrl && supabaseKey  ? createClient(supabaseUrl, supabaseKey) : null // usually the anon/public key
  


  // create a handleUsersProblem function 

  const handleUsersProblem = async () => 
  { 



    if(problem.trim() && problem.includes('робота лендингу' && solution.trim())){ 

      try
      {

        const response = await supabase.from("users").insert("INSERT INTO USERS(id, name, age, created_at, problem) ");

        if(!response.ok) {
          setAnswer("The solution of the problem", solution);
        }else{
          setAnswer("Sorry, please! But we can`t help ypu with this problem");
        } 
    
        
      }catch(err){
        console.log(err);
      }
    }


    

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!supabase) {
      setMessage("Supabase is not configured. Check your .env file.");
      return;
    }

    if (!userName || !userSubname || !userEmail || !userPassword) {
      setMessage("Please fill in all fields");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const { data, error } = await supabase.auth.signUp({
        email: userEmail,
        password: userPassword,
        options: {
          data: {
            first_name: userName,
            last_name: userSubname,
          },
        },
      });

      if (error) throw error; 

      const {error: insertError} = await supabase.from("user_registr").insert([
        {
          user_name:userName,
          user_subname:userSubname,
          user_email: userEmail, 
          user_password: userPassword,
          is_blocked: false, 
          createdt_at: Date.now(), 
        }
      ])


      setMessage("Registration successful! Check your email to confirm.");
      setUserName("");
      setUserSubname("");
      setUserEmail("");
      setUserPassword("");
    } catch (error) {
      console.error("Registration error:", error);
      setMessage(error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: "auto",
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5" textAlign="center">
        Registration
      </Typography>

      <Return />

      <TextField
        label="Your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        fullWidth
        required
      />

      <TextField
        label="Your surname"
        value={userSubname}
        onChange={(e) => setUserSubname(e.target.value)}
        fullWidth
        required
      />

      <TextField
        label="Your email"
        type="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        fullWidth
        required
      />

      <TextField
        label="Your password"
        type="password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        fullWidth
        required
      />

      <Button
        type="submit"
        variant="contained"
        disabled={loading}
        fullWidth
      >
        {loading ? "Registering..." : "Register"}
      </Button>

      {message && (
        <Typography color={message.includes("successful") ? "success.main" : "error"}>
          {message}
        </Typography>
      )}
    </Box>
  );
}; export default Form;

