import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo-container">
      <div className="main-logo">
        <Link to="/">
          <img src="./images/logo.svg" alt="logo-large" />
        </Link>
      </div>
      <div className="small-logo">
        <Link to="/">
          <img src="./images/logo.svg" alt="logo-small" />
        </Link>
      </div>
    </div>
  );
}
