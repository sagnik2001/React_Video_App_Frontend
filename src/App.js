import React from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import RegisterPage from "./Pages/Register";

const App = () => {
  return (
    // <div className="">
    //   {/* sidebar */}
    //   {/* <Sidebar /> */}
    //   {/* chat Section */}
    // </div>
    <BrowserRouter>
        <Routes>
          <Route path="/login"  element={<RegisterPage/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
