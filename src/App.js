import React,{useState} from "react";
import "./App.css"
// import Sidebar from "./Sidebar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./Pages/register/Register";
import LogInPage from "./Pages/Login/LogInPage";

const App = () => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }



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
          <Route path="/Register"  element={<Register />}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;