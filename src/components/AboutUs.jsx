import React, { useState } from "react";
import FeedBack from "./FeedBacks";
import { createClient } from "@supabase/supabase-js";

const AboutUs = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

  // Create client only if keys exist
  const supabase =
    supabaseUrl && supabaseKey
      ? createClient(supabaseUrl, supabaseKey)
      : null;

  if (!supabase) {
    console.error("Supabase URL or Key is missing! Check your .env file.");
  }

  return (
    <div
      className="container"
      style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}
    >
      <h1>Про нас</h1>

      <p>
        Ми — команда, яка допомагає людям вести здоровий спосіб життя.
      </p>

      <button
        onClick={() => setShowFeedback(!showFeedback)}
        style={{
          padding: "10px 20px",
          background: "#2e7d32",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        {showFeedback ? "Сховати відгук" : "Залишити відгук"}
      </button>

      {showFeedback && <FeedBack />}
    </div>
  );
};

export default AboutUs;