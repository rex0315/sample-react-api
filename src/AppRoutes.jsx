import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { RootLayout } from "./Layout/RootLayout";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />

          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
