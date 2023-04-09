import React, { useState } from "react";
import "./login.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "otp-input-react";
import {auth} from "./firebase.config";
import toast, { Toaster } from 'react-hot-toast';
import { RecaptchaVerifier, signInWithPhoneNumber  } from "firebase/auth";
// import {CgSpinner} from "react-icons/cg";

const LoginForm = () => {


  const [otp, setOtp] = useState("");
  const[ph, setPh]= useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(true);
  const [user, setUser] = useState(false);


function onCaptchVerify(){
  if(!window.recaptchaVerifier){
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
       onSignup()
      },
      'expired-callback': () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        // ...
      }
    }, auth);
  }
}

function onSignup(){
  setLoading(true)
  onCaptchVerify()

  const appVerifier = window.recaptchaVerifier

  const formatPh = '+' + ph
  signInWithPhoneNumber(auth, formatPh, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
           setLoading(false);
           setShowOTP(false);
           toast.success('OTP Sended Successfully');

    }).catch((error) => {
     console.log(error);
     setLoading(false);
    });

}

function onOTPVerify(){
  setLoading(true)
  window.confirmationResult.confirm(otp).then(async(res)=>{
    console.log(res)
    setUser(res.user)
    setLoading(false)
  }).catch(err=>{
    console.log(err)
    setLoading(false)
  })
}

  return (
    <>
      <div>
        <Toaster toastOptions={{ duration: 4000 }}/>
        <div id="recaptcha-container"></div>
        {user?(
          <h2>success</h2>
        ):(
          <section>
          {showOTP ? (
            <>
              <PhoneInput
                country={"in"}
                onlyCountries={["in", "us", "sg", "sa", "ae"]}
                className="input"
                placeholder="Your phone number "
                value={ph}
                onChange={setPh}
                dropdownStyle={{ textAlign: "left", width: "240px" }}
                countryCodeEditable={false}
                buttonStyle={{
                  padding: " 0px 20px",
                  marginLeft: "20px",
                  height: "50px",
                  background: "white",
                }}
                inputStyle={{
                  width: "293px",
                  height: "50px",
                  marginLeft: "40px",
                  fontSize: "18px",
                }}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
              />

              <div id="sign-in-button"></div>
              <button onClick={onSignup} className="continue" >
              {loading && <div className="loader"></div>}
                Continue
              </button>
            </>
          ) : (
            <>
              <div className="Login-Otp-Input">
                <h3 id="enter">Enter verification code</h3>
                <div className="para">
                  <p>We have a sent you a 6 digit OTP on </p>
                  <button id="edit-btn">Edit</button>
                </div>
              </div>

              <OtpInput
                value={otp}
                onChange={setOtp}
                OTPLength={6}
                otpType="number"
                disabled={false}
                autoFocus
                className="opt-container "
              ></OtpInput>
              <div id="sign-in-button"></div>

              <button  onClick={onOTPVerify} className="continue" >
                {/* <CgSpinner size={20}/> */}
                {loading && <div className="loader-login"></div>}
                Login
              </button>
            </>
          )}
        </section>
        )}
       
      </div>
    </>
  );
};

export default LoginForm;
