import React, { useState } from 'react';
import '../Login/Login.css';
import styles from './Otp.module.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { base_url } from '../../app/base_url';

const OtpPage = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleChange = (event, index) => {
    const { value } = event.target;
    // Update only if the input is a number or empty for backspace
    console.log(value)
    if (/^[0-9]{0,1}$/.test(value)) {
      let newOtp = [...otp];
      console.log(newOtp,index);
      console.log(newOtp[index], 'index');
      newOtp[index] = value;
      console.log(newOtp);
      setOtp(newOtp);

      // Move to next input if value is a number
      if (value && index < 5) {
        event.target.nextSibling.focus();
      }
    }
  };

  const handleKeyUp = (event, index) => {
    // On backspace, move focus to previous field if current is empty
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      event.target.previousSibling.focus();
    }
  };

  const handleSubmitOtp = async () => {
    const otpCode = otp.join('');
    try {
      const response = await axios.post(`${base_url}signUp/check-otp/`, {
        id: state.data.data.id,
        otp: otpCode,
      });
      console.log(response);
      localStorage.setItem('userId', state.data.data.id);
      navigate('/create-profile');
    } catch (error) {
      console.error(error);
    }
  };

  console.log('Rendering OTPPage', otp);


  return (
    <div className='App'>
      <div className='auth-form-container'>
        <p>Enter The OTP</p>
        <div className={styles.otpforms}>
          {otp.map((data, index) => {
             {console.log(data)}
            return(
           
            <input
              key={index}
              className={styles.otpfield}
              type='text'
              name='otp'
              maxLength='1'
              value={data}
              onChange={(e) => handleChange(e, index)}
              onFocus={(e) => e.target.select()}
              onKeyUp={(e) => handleKeyUp(e, index)}
            />
          )})}
        </div>
        <div className={styles.otpforms}>
          <button className='btn btn-secondary mr-2' onClick={() => setOtp(Array(6).fill(''))}>
            Clear
          </button>
          <button className='btn btn-primary' onClick={handleSubmitOtp}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
