import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
