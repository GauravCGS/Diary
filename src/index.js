import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles/index.scss";
import { PostsContextProvider } from "./context/PostsContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthContextProvider>
    <React.StrictMode>
      <PostsContextProvider>
        <Router>
          <App />
        </Router>
      </PostsContextProvider>
    </React.StrictMode>
  </AuthContextProvider>
);
