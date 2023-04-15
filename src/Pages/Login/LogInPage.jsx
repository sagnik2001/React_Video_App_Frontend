import React, {useState} from 'react';
import "./Login.css"

const LogInPage = (props) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
    <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor="phoneNuber">Phone Number</label>
      <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='Enter Your Phone Number' id='email' name='email' />     
      <button type='submit'>Log in</button>
    </form>
    <button className='link-btn' onClick={()=> props.onFormSwitch('/register')}>Don&apos;t have an account? Register here. </button>
    </div>
  )
}
export default LogInPage;