import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Authentication/Signup";
import Home from "./pages/Home";
import Navbar from "./pages/Shared/Navbar";

const App = () => {
  return (
    <main>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default App;
