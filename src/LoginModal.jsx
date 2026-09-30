import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material"; 


const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "white",
      }}
    >
      <Typography variant="h5" textAlign="center">
        Login
      </Typography>

      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />

      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        required
      />

      <Button type="submit" variant="contained" fullWidth>
        Login
      </Button>
    </Box>
  );
};

export default LoginModal;