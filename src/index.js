import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import FeedbackProvider from "./contexts/FeedbackContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FeedbackProvider>
        <App />
      </FeedbackProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
