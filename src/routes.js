import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TesteDash from "./pages/Dashboard/Teste";
import Admin from "./pages/Admin";
import Error from "./pages/Error";

const userAuth = () => {
  return true;
};

const PrivateRouteAdmin = ({ children }) => {
  const auth = userAuth();
  const userComum = true;

  return auth ? (
    children
  ) : userComum ? (
    <Error
      error="Acesso restrito"
      text="Você não tem permissão para acessar esta página."
    />
  ) : (
    <Error error="Acesso restrito" text="Faça login para acessar a página" />
  );
};

const PrivateRouteUser = ({ children }) => {
  const auth = userAuth();
  return auth ? (
    children
  ) : (
    <Error error="Acesso restrito" text="Faça login para acessar a página" />
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Error typeError="code" />} />
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRouteUser>
              <TesteDash />
            </PrivateRouteUser>
          }
        />

        <Route
          path="/admin"
          element={
            <PrivateRouteAdmin>
              <Admin />
            </PrivateRouteAdmin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
