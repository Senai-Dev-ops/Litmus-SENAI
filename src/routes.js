import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Navigate to="/" />} />

        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Dashboard/*" element={<Navigate to="/Dashboard/*" />} />

        <Route path="/Admin" element={<Admin />} />
        <Route path="/Admin/*" element={<Navigate to="/Admin/*" />} />
      </Routes>
    </BrowserRouter>
  );
}
