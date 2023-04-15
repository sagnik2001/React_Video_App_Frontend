import React, {useState} from 'react';
import "../Login/Login.css"

const OtpPage = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const handleChange=(element, index)=>{
      if(isNaN(element.value)) return false;

      setOtp([...otp.map((d, idx)=>(idx===index)? element.value :d )]);

      if(element.nextSibling){
        element.nextSibling.focus();
      }
    }


  return (
    <div className='auth-form-container'>
      <p>Enter The OTP sent to you to verify Your Identity </p>
      {
        otp.map((data,index)=>{
          return <input 
          className='otp-field'
          type='text'
          name='otp'
          maxLength="1" 
          key={index}
          value={data}
          onChange={e=>handleChange(e.target,index)}
          onFocus={e=>e.target.select()}
          />
        })
      }
      <p>OTP Entered- {otp.join("")}</p>
      <p>
        <button className='btn btn-secondary mr-2' onClick={e=> setOtp([...otp.map(v=> "")])}>
          Clear
        </button>
        <button className='btn btn-primary' onClick={e=> alert("Entered OTP is "+otp.join(""))}></button>
      </p>
    </div>
  )
}
export default OtpPage;