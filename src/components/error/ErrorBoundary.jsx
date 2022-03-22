import React from "react";
import ErrorMessage from "./ErrorMessage.jsx";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }
  
    render() {
      if (this.state.hasError) {
        return <ErrorMessage>{this.state.error}</ErrorMessage>
      }
  
      return this.props.children; 
    }
  }
  
  export default ErrorBoundary