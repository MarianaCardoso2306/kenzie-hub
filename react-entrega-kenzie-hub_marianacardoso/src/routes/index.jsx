import React from "react";
import { Route, Routes } from "react-router-dom";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { ProtectedRoutes } from "../pages/ProtectedRoutes";
import { TechProvider } from "../providers/TechContext";

export const AppRoutes = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/" element={<Login user={user} setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/:userId" element={<ProtectedRoutes />}>
        <Route
          path="/dashboard/:userId"
          element={
            <TechProvider>
              <Dashboard user={user} setUser={setUser} />
            </TechProvider>
          }
        />
      </Route>
    </Routes>
  );
};
