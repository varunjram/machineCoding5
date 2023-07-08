import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Restaurant from "../pages/Restaurant";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/restaurant/:restId"
          element={<Restaurant />}
        />
      </Routes>
    </>
  );
}
