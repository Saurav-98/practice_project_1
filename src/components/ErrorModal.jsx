import React from "react";
import Card from "./Card";
import "./ErrorModal.css";

const ErrorModal = ({ errorMessage }) => {
  return (
    <Card className={"modal-card"}>
      <header className="modal-header">
        <h3>Input Error!!</h3>
      </header>
      <main className="modal-main">
        <p>{errorMessage}</p>
      </main>
    </Card>
  );
};

export default ErrorModal;
