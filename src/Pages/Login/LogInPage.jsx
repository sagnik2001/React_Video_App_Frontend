import React, { useState } from "react";
import "./Login.css";



const LogInPage = () => {
  const [email, setEmail] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (

    <div className="App">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Your Phone Number"
            id="email"
            name="email"
          />
          <button type="submit">Log in</button>
        </form>
        <button className="link-btn">
          Don&apos;t have an account? Register here.{" "}
        </button>
      </div>

    </div>
  );
};
export default LogInPage;
