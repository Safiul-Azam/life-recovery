import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/Authentication/Signup";
import Login from "./pages/Authentication/Login";
import Home from "./pages/Home";
import RequireAuth from "./pages/Authentication/RequireAuth";

const App = () => {
  return (
    <main>
      
      <Routes>
        <Route path="/" element={<RequireAuth><Home/></RequireAuth>} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default App;
