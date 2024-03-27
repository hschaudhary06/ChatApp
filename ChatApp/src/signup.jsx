import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

function signup() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile,setMobile] = useState('');
  const [password, setPassword] = useState('');
  
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isMobileValid,setIsMobileValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  
  const [nameError, setNameError] = useState({
    display: 'none',
    b_color: '',
    msg:''
  });
  const [emailError, setEmailError] = useState({
    display: 'none',
    b_color: '',
    msg:''
  });
  const [mobileError, setMobileError] = useState({
    display: 'none',
    b_color: '',
    msg:''
  });
  const [passError, setPassError] = useState({
    display: 'none',
    b_color: '',
    msg:''
  });
  
  const [show_paswd,setShow_pass] = useState({
    icon: 'ri-eye-off-line',
    b_color: '',
    type: 'password'
  });

  
  

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setIsNameValid(value.trim().length > 0);
    value.trim().length == 0 ? setNameError({display: 'block',b_color: 'red',msg:'Name must be required!*'}) : setNameError({display: 'none',b_color: '',msg:''});
  }

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    if(value === ""){
      setEmailError({display: 'block',b_color: 'red',msg:'Email must be required!*'
      });
    } else{
      const isValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
      (isValid)?setEmailError({display: 'none',b_color: '',msg:''}):setEmailError({display: 'block',b_color: 'red',msg:'Email is invalid!*'});
      setIsEmailValid(isValid);
    }
  }

  const handleMobileChange = (e) => {
    const value = e.target.value;
    setIsMobileValid(value.length >= 10);
    if (value == "") {
      setMobile(value);
      setMobileError({display: 'block',b_color: 'red',msg:'Mobile number is required!*'});
    } else if (value.trim().length <= 10){
      setMobile(value);
      (value.length == 10) ?
      setMobileError({display: 'none',b_color: '',msg:''}) :
      setMobileError({display: 'block',b_color: 'red',msg:'Mobile number must be 10 numbers!*'});
    }
  }

  const handlePassChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(value.length >= 6);
    if (value === "") {
      setPassError({display: 'block',b_color: 'red',msg:'Password must be required!*'});
    } else {
      value.length < 6 ? setPassError({display: 'block',b_color: 'red',msg:'Password must be at least 6 characters!*'}) : setPassError({display: 'none',b_color: '',msg:''});
    }
  }

  const isSubmitDisable = !isNameValid || !isEmailValid || !isMobileValid || !isPasswordValid

  


  return (
    <div className="main">
      <div className="Login-main">
        <div className="back-btn-div" onClick={()=>navigate("/")}>
            <i className="ri-arrow-left-s-line"></i>
        </div>
        <div className="Login-heading">
          <div style={{ width: "293px" }}>
            <h2>Signup with Email</h2>
            <span style={{ opacity: "0.7" }}>
              Welcome back, Sign in using your Social account or email to
              continue us
            </span>
          </div>
        </div>
        <div
          className="login-with-social"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div className="facebook-icon" style={{ borderColor: "#000" }}>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#039be5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="google-icon" style={{ borderColor: "#000" }}>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="divider-login"></div>
        <div className="form-data">
          <form>
            <div className="signup-fields">
              <label htmlFor="name">Your name</label>
              <input type="text" style={{borderColor:nameError.b_color}} value={name} onChange={handleNameChange} />
              <p className="error-msg" style={{display:nameError.display}}>{nameError.msg}</p>
            </div>
            <div className="signup-fields">
              <label htmlFor="email">Your email</label>
              <input type="email" style={{borderColor:emailError.b_color}} value={email} onChange={handleEmailChange} />
              <p className="error-msg" style={{display:emailError.display}}>{emailError.msg}</p>
            </div>
            <div className="signup-fields">
              <label htmlFor="mobile">Mobile no</label>
              <input type="number" maxLength={10} style={{borderColor:mobileError.b_color}} value={mobile} onChange={handleMobileChange} />
              <p className="error-msg" style={{display:mobileError.display}}>{mobileError.msg}</p>
            </div>
            <div className="signup-fields">
              <label htmlFor="password">Password</label>
              <input type="password" style={{borderColor:passError.b_color}} value={password} onChange={handlePassChange} />
              <p className="error-msg" style={{display:passError.display}}>{passError.msg}</p>
            </div>
            
            <div className="btn-login signup-btn">
              <button disabled={isSubmitDisable}>Create an account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default signup;
