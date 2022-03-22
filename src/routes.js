import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Error from "./pages/Error";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/*"
          element={
            <Error
              typeError="code"
              error="404"
              text="A página que você está procurando não existe."
            />
          }
        />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/*"
          element={
            <Error
              error="Acesso restrito."
              text="Você não tem permissão para acessar esta página. "
            />
          }
        />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/*" element={<Error error="404" />} />
      </Routes>
    </BrowserRouter>
  );
}
