import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Error from "./pages/Error";

import Service from "./services";
const srv = new Service();

var response = { ADM: false };

const userAuth = srv.validToken;

const PrivateRouteAdmin = ({ children }) => {
  const auth = userAuth(localStorage.getItem("token"), () => {}).then(
    (res) => res
  );
  const userComum = response.ADM;

  return auth ? (
    userComum ? (
      children
    ) : (
      <Error
        error="Acesso restrito"
        text="Você não tem permissão para acessar esta página."
      />
    )
  ) : (
    <Error error="Acesso restrito" text="Faça login para acessar a página" />
  );
};

const PrivateRouteUser = ({ children }) => {
  const auth = userAuth(localStorage.getItem("token"), () => {}).then(
    (res) => res
  );

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
              <Dashboard />
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
