import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import Business from "./Pages/Business";
import How from "./Pages/How";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Sample from "./Pages/Sample";
import { RootLayout } from "./Layout/RootLayout";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/How" element={<How />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Sample" element={<Sample />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
