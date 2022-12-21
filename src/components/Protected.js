import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      !localStorage.getItem("id") &&
      !localStorage.getItem("name") &&
      !localStorage.getItem("email") &&
      !localStorage.getItem("password") &&
      !localStorage.getItem("phone")
    ) {
      navigate("login");
    }
  }, []);
  let Comp = props.Comp;
  return (
    <div>
      <Comp />
    </div>
  );
};

export default Protected;
