import React, { useState } from "react";
// import "../Login/Login.css"
import "../register/Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [phone, setphone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length < 10) return;
  };

  return (
    <div className="App">
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Phone Number</label>
          <input
            value={phone}
            name="Phone Number"
            id="name"
            placeholder="Enter Your Phone Number"
            onChange={(e) => {
              setphone(e.target.value);
            }}
          />

          <button type="submit">Register</button>
        </form>
        <button
          className="link-btn"
          onClick={() => {
            navigate("/login");
          }}
        >
          Already have an account? Login here.{" "}
        </button>
      </div>
    </div>
  );
};

export default Register;
