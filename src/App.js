import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/Authentication/SignUp";
import Login from "./pages/Authentication/Login";
import Home from "./pages/Home";
import Navbar from "./pages/Shared/Navbar";
import RequireAuth from "./pages/Authentication/RequireAuth";

const App = () => {
  return (
    <main>
      <Navbar/>
      <Routes>
        <Route path="/" element={<RequireAuth><Home/></RequireAuth>} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default App;
