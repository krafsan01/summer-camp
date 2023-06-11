import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import MantineAndColorSchemaProvider from "./Layouts/MantineAndColorSchemaProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineAndColorSchemaProvider>
      <Router>
        <App />
      </Router>
    </MantineAndColorSchemaProvider>
  </React.StrictMode>
);
