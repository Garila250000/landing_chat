import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { createClient } from "@supabase/supabase-js";
import LoginModal from "../LoginModal";

const FeedBack = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // 1. Read the variables first
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

  // 2. Debug – look at the browser console
  console.log("URL →", supabaseUrl);
  console.log("KEY →", supabaseKey);

  // 3. Only create the client if both values exist
  let supabase = null;
  if (supabaseUrl && supabaseKey) {
    supabase = createClient(supabaseUrl, supabaseKey);
  } else {
    console.error("Supabase URL or Key is missing! Check your .env file and restart the server.");
  }

  const handleSubmitFeedback = async (e) => {
    e.preventDefault();

    if (!supabase) {
      setMessage("Supabase is not configured. Check .env file.");
      return;
    }

    if (!feedback.trim()) {
      setMessage("Please write some feedback");
      return;
    }

    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const { error } = await supabase.from("feedback").insert([
        { content: feedback },
      ]);

      if (error) throw error;

      setMessage("Thank you for your feedback!");
      setFeedback("");
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Failed to send feedback");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h6">Your feedback</Typography>

      <TextField
        multiline
        rows={4}
        fullWidth
        placeholder="Write your feedback about our work..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />

      <Button
        variant="contained"
        onClick={handleSubmitFeedback}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send feedback"}
      </Button>

      {message && (
        <Typography color={message.includes("Thank you") ? "success.main" : "error"}>
          {message}
        </Typography>
      )}

      {/* Show login modal when needed */}
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            setShowLoginModal(false);
          }}
        />
      )}
    </Box>
  );
};

export default FeedBack;