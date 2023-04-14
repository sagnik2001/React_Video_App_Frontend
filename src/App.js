import React, { useState } from "react";
import "./App.css";
// import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/register/Register";
import LogInPage from "./Pages/Login/LogInPage";
import Main from "./Pages/userProfile/Main.jsx";

const App = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    // <div className="">
    //   {/* sidebar */}
    //   {/* <Sidebar /> */}
    //   {/* chat Section */}
    // </div>

    <BrowserRouter>
      <div className="App">
        {currentForm === "login" ? (
          <LogInPage onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
      <Routes>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/userProfile" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
