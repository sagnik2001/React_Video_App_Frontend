import React, { useState } from "react";
// import "../Login/Login.css"
import "./Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../app/base_url";

const Register = () => {
  const [phone, setphone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length < 10) return;
    const appendPhone = "+91" + phone;
    axios
      .post(`${base_url}signUp/phone/`, {
        phoneNumber: appendPhone,
      })
      .then((res) => {
        console.log(res);
        navigate("/otppage", {
          state: {
            data: res.data,
          },
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

//   return (
//     <div className="App">
//       <div className="auth-form-container">
//         <h2>Register</h2>
//         <form className="register-form" onSubmit={handleSubmit}>
//           <label htmlFor="name">Phone Number</label>
//           <input
//             value={phone}
//             name="Phone Number"
//             id="name"
//             placeholder="Enter Your Phone Number"
//             onChange={(e) => {
//               setphone(e.target.value);
//             }}
//           />

//           <button type="submit">Register</button>
//         </form>
//         <button
//           className="link-btn"
//           onClick={() => {
//             navigate("/login");
//           }}
//         >
//           Already have an account? Login here.{" "}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Register;




//Rahul's Code

return (
  <div className="reg_container">
    <div className="container_wrapper">
      <h3 className="register_text">
        <i className="bi bi-person-circle ac-logo" />
        Register
      </h3>

      <form method="post" onSubmit={handleSubmit}>
        <div className="item">
          <input
            value={phone}
            onChange={(e) => {
            setphone(e.target.value)}
            }
            className="input"
            type="number"
            inputMode="numeric"
            placeholder="Phone Number"
          />
        </div>

        <div className="item submit">
          <button type="submit">Send OTP</button>
        </div>
      </form>
      
      <h2 className="span_class">
        <span></span>
      </h2>
      
      <span className="ac">
        Already have an Account? <a href="/login">Sign In</a>
      </span>
    </div>
  </div>
);
}

export default Register;