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
          <Route index element={<Login />} />

          <Route path="/Home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
