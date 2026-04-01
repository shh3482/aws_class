<<<<<<< HEAD:project2/matey/src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import ErrorBoundary from "./components/9_Common/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
>>>>>>> parent of c87a4ea (a):project2/src/index.js

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
