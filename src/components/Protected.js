import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      !localStorage.getItem("token1") &&
      !localStorage.getItem("token2") &&
      !localStorage.getItem("token3") &&
      !localStorage.getItem("token4") &&
      !localStorage.getItem("token5")
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
