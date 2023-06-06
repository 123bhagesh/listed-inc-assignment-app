import React from "react";
import Style from "./Style/Login.module.css";

export const SignIn = () => {
  return (
    <div className={Style.container}>
    <div className={Style.fristChild}>
      <h1>Board.</h1>
    </div>
    <div className={Style.secondChild}>
      <div className={Style.signContainer}>
        <div>
          <h1>Sign In</h1>
          <p>Sign In to your account</p>
        </div>
        <div>
          <div>
            <img
              style={{ width: "22px", height: "22px" }}
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="Google-Icon"
            />
            <p>Sign in with Google</p>
          </div>
          <div>
            <img
              style={{ width: "17px", height: "17px" }}
              src="https://cdn.icon-icons.com/icons2/792/PNG/512/APPLE_icon-icons.com_65545.png"
              alt="Apple-Icon"
            />
            <p>Sign in with Apple</p>
          </div>
        </div>
        <div className={Style.signInputs}>
          <label htmlFor="">Email address</label>
          <input type="text" />
          <label htmlFor="">Password</label>
          <input type="text" />
          <p style={{ color: "#4b7cd8" }}>Forgot password?</p>
          <button>Sign In</button>
        </div>
        <div className={Style.registerDiv}>
          <p>Don't have an account?</p>
          <p style={{ color: "#4b7cd8" }}>Register here</p>
        </div>
      </div>
    </div>
  </div>
  )
}
