import React,{useState} from "react";
// import "../Login/Login.css"
import "../register/Register.css"

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(email);
}


    return(
      <div className="auth-form-container">
        <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Phone Number</label>
        <input value={name} name="Phone Number" id="name" placeholder="Enter Your Phone Number" />
          
        <button type='submit'>Log in</button>
      </form>
      <button className='link-btn' onClick={()=>props.onFormSwitch('login')}>Already have an account? Login here. </button>
      </div>
    )
}

export default Register;