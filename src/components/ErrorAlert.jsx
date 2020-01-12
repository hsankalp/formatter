import React from "react";

const ErrorAlert = ({ isValid, error }) => {
  return isValid ? (
    <div className="alert alert-success m-3" role="alert">
      Valid JSON
    </div>
  ) : (
    <div className="alert alert-danger m-3" role="alert">
      Invalid JSON: {error}
    </div>
  );
};

export default ErrorAlert;
