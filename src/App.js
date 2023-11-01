import React from "react";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Routes from "./routes/";
import Base from "./pages/Base";

import AuthProvider from "./context/auth";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Base>
          <ToastContainer autoClose={3000} />
          <Routes />
        </Base>
      </BrowserRouter>
    </AuthProvider>
  );
}
