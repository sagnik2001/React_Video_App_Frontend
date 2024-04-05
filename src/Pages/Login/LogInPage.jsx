import React, { useRef, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../app/base_url";
import { toast } from "react-toastify"

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const toastId = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length < 10) {
      toast.error('Phone number must be atleast 10 digits', {
        position: "top-right",
        autoClose: 3000, // Close the popup after 3000 milliseconds (adjust as needed)
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    const appendPhone = "+91" + email;
    // toast.loading('Please wait till your request is being processed', {
    //   position: "top-right",
    //   autoClose: 3000, // Close the popup after 3000 milliseconds (adjust as needed)
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    // });
    toastId.current = toast.loading('Please wait till your request is being processed', {
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
    axios
      .post(`${base_url}signUp/login/`, {
        phoneNumber: appendPhone,
      })
      .then((res) => {
        console.log(res);
        toast.update(toastId.current, {
          render: "Successfully Logged In",
          type: "success",
          isLoading: "false"
        })
        localStorage.setItem("userId", res.data.data.id);
        localStorage.setItem("token", res.data.token);
        navigate("/userProfile");
      })
      .catch((err) => {
        toast.update(toastId.current, {
          render: "Error occured. Please try again",
          type: "error",
          isLoading: "false",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
        console.error(err);
      });
  };

//   return (
//     <div className="App">
//       <div className="auth-form-container">
//         <h2>Login</h2>
//         <form className="login-form" onSubmit={handleSubmit}>
//           <label htmlFor="phoneNumber">Phone Number</label>
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="name"
//             placeholder="Enter Your Phone Number"
//             id="email"
//             name="email"
//           />
//           <button type="submit">Log in</button>
//         </form>
//         <button
//           className="link-btn"
//           onClick={() => {
//             navigate("/register");
//           }}
//         >
//           Don&apos;t have an account? Register here.{" "}
//         </button>
//       </div>
//     </div>
//   );
// };
// export default LogInPage;

  return (
    <div className="login_container">
      <div className="container_wrapper_login">
        <h3 className="login_text">
          <i className="bi bi-person-circle ac-logo" />
          Log In
        </h3>

        <form method="post" className="login_form" onSubmit={handleSubmit}>
          <div className="item">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              type="number"
              inputMode="numeric"
              placeholder="Phone Number"
            />
          </div>

          <div className="item submit">
            <button type="submit">Log In</button>
          </div>
        </form>

        <h2 className="span_class">
          <span></span>
        </h2>

        <span className="ac">
          Don't have an Account? <a href="/register">Register</a>
        </span>
      </div>
    </div>
  );
}

export default LogInPage;

