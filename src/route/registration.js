import React from "react";

import BasicTabs from "../components/BasicTabs";
import "../Index.css";
function Registration() {
  return (
    <div className="form-card">
      <h4
        style={{
          fontSize: "18px",
          fontFamily: "Inter",
          marginBottom: "30px",
        }}
      >
        Team Sign Up
      </h4>
      <BasicTabs></BasicTabs>
    </div>
  );
}

export default Registration;
