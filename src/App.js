import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInSide from "./pages/SignInSide";
import SignUpSide from "./pages/SingUpSide";
import MainPage from "./pages/main";
import Manager from "./pages/manager";
import Profile from "./pages/profile";
import PrivateRoute from "./auth/PrivateRoute";

export default function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route path="/signup" element={<SignUpSide />} />

          <Route
            path="/main"
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/manager"
            element={
              <PrivateRoute>
                <Manager />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </Fragment>
    </Router>
  );
}
