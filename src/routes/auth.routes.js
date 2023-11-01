import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import Termos from "../pages/TermosDeUso";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Pos_Login from "../pages/Pos_Login";

import { AuthContext } from "../context/auth";

export default function AuthRoutes() {
  const { user, logged } = useContext(AuthContext);
  return (
    <Routes>
      {user && !logged ? (
        <>
          <Route index path="/" element={<Pos_Login />} />
          <Route path="*" element={<Pos_Login />} />
        </>
      ) : (
        <>
          <Route index path="/" element={<Login />} />
          <Route path="*" element={<Login />} />
        </>
      )}

      <Route index path="/cadastro" element={<Cadastro />} />
      <Route index path="/termos" element={<Termos />} />
    </Routes>
  );
}
