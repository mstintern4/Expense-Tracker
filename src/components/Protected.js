import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
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
