import React from "react";
import { Route, Routes } from "react-router-dom";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";

export const AppRoutes = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/" element={<Login user={user} setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard/:userId"
        element={<Dashboard user={user} setUser={setUser} />}
      />
    </Routes>
  );
};
