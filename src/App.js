import React, { useState } from "react";
import "./App.css";
// import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/register/Register";
import LogInPage from "./Pages/Login/LogInPage";
import OtpPage from "./Pages/otpPage/OtpPage";

import Main from "./Pages/userProfile/Main.jsx";
import Home from "./Pages/Home/Home";
import CreateProfile from "./Pages/CreateProfile/CreateProfile";
import { ProtectedRoute, GuestRoute } from "./Components/ProtectedRoute";

const App = () => {
  return (
    // <div className="">
    //   {/* sidebar */}
    //   {/* <Sidebar /> */}
    //   {/* chat Section */}
    // </div>
    <BrowserRouter>
      {/* 
        {currentForm === "login" ? (
          <LogInPage onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div> */}
      <Routes>
        <Route
          path="/"
          element={
            <GuestRoute>
              <Home />
            </GuestRoute>
          }
        />
        <Route
          path="/login"
          element={
            <GuestRoute>
              <LogInPage />
            </GuestRoute>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <GuestRoute>
              <Register />
            </GuestRoute>
          }
        ></Route>
        <Route
          path="/userProfile"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/otppage" element={<OtpPage />} />

        <Route
          path="/create-profile"
          element={
            <ProtectedRoute>
              <CreateProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
