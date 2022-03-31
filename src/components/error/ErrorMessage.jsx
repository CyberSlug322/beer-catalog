import React from "react";
import "./ErrorMessage.scss"

const ErrorMessage = ({children, className = ''}) => (
  <label className={`error-message ${className}`}>{children}</label>
);

export default ErrorMessage;
