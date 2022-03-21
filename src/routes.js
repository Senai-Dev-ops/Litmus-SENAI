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
        <Route path="/*" element={<Error code="404" />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/*" element={<Error code="404" />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/*" element={<Error code="404" />} />
      </Routes>
    </BrowserRouter>
  );
}
