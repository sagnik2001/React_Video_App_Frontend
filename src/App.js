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


const App = () => {
  return (
    // <div className="">
    //   {/* sidebar */}
    //   {/* <Sidebar /> */}
    //   {/* chat Section */}
    // </div>
    <BrowserRouter>

    <div className="App">
      {
            currentForm === "login" ? <LogInPage onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
          </div>
        <Routes>
          <Route exact path="/login"  element={<LogInPage />}></Route>
          <Route path="/register"  element={<Register />}/>
          <Route path="/otppage"  element={<OtpPage />}/>
        </Routes>

      {/* 
        {currentForm === "login" ? (
          <LogInPage onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/userProfile" element={<Main />}></Route>
        <Route path="/create-profile" element={<CreateProfile />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;
