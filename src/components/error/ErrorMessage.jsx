import React from "react";
import "./ErrorMessage.scss"

const ErrorMessage = ({children}) => (
  <label className="error-message">{children}</label>
);

export default ErrorMessage;
