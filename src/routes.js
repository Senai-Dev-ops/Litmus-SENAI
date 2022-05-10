import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TesteDash from "./pages/Dashboard/Teste";
import Admin from "./pages/Admin";
import Error from "./pages/Error";
import axios from "axios";

var response = {};

const userAuth = () => {
  axios.get('http://localhost:4000/auth', {headers: {"accessToken": localStorage.getItem("accessToken")}})
  .then((res) => {
    response = res.data;
  })

  if(response.error){
    console.log("Entrou no erro")
    return false;
  }

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
