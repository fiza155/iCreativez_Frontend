import React from "react";
import "./Button.css";

const Button = ({ text, onClick, className }) => {
  return (
    <button className={`primary-btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
