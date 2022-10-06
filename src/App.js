import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import RequireAuth from "./pages/auth/RequireAuth";
import useAuthCheck from "./hooks/useAuthCheck";
import Loading from "./components/Shared/Loading";

const App = () => {
  const authLoading = useAuthCheck();

  return authLoading ? (
    <div>
      <Loading />
    </div>
  ) : (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default App;
