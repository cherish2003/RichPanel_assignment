import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Integrationpage } from "./pages/Integrationpage";
import { DisconnectPage } from "./pages/DisconnectPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Integrationpage />} path="/integrateuser" />
        <Route element={<DisconnectPage />} path="/disconnectuser" />
      </Routes>
    </>
  );
}

export default App;
