import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import AddTransaction from "./components/AddTransaction";
import ShowTransactions from "./components/ShowTransactions";
import Protected from "./components/Protected";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route
          path="/addtransaction"
          element={<Protected Comp={AddTransaction} />}
        />
        <Route
          path="/showtransaction"
          element={<Protected Comp={ShowTransactions} />}
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
