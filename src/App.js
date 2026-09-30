import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Button from "./LoginButton";
import LoginModal from "./LoginModal";
import Registration from "./Registration";
import Form from "./components/Form";
import Sidebar from "./components/Sidebar";
import AboutUs from "./components/AboutUs";
import "./App.css"; 
import * as bt from "bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div id="outer-container">
        <Sidebar pageWrapId="page-wrap" outerContainerId="outer-container" />

        <main id="page-wrap" style={{ padding: "40px" }}>
        <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 40px",
              backgroundColor: "#1b5e20",
              color: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              position: "sticky",
              top: 0,
              zIndex: 100,
            }}
          >
            {/* Ліва частина - лого / назва */}
            <div style={{ fontSize: "22px", fontWeight: "600" }}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Landing Chat
              </Link>
            </div>

            {/* Права частина - кнопки */}
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <Button />
              <Registration />
            </div>
          </header>

          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/login" element={<LoginModal />} />
            <Route path="/registration" element={<Form />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/tutorial" element={<h1>Tutorial</h1>} />
            <Route path="/creators" element={<h1>Creators</h1>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;