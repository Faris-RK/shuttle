import React from "react";
import "./Form.css";
import logomodal from "../../../assets/logo-modal.png";
import closelogo from "../../../assets/closelogo.png";
import logingoogle from "../../../assets/logingoogle.png";
import loginfacebook from "../../../assets/loginfacebook.png";
import or from "../../../assets/or.png";

export const LoginForm = ({ onSubmit, changeFormType }) => {
  return (
    <div className="flex-container">
      {/* modal gambar kiri */}
      <div className="modal-left">
        <div className="image-overlay"></div>
        <div className="modal-image-container">
          <img className="logo-modal" src={logomodal} alt="" />

          <p className="text-logo-modal">travel anywhere with us</p>
        </div>
      </div>

      {/* modal form kanan */}
      <div className="modal-right">
        <form onSubmit={onSubmit}>
          <img className="close-logo" src={closelogo} alt="" />
          <div className="login-title">Sign In to Shuttle</div>
          <br />
          <div className="form-group">
            <input
              type="email"
              className="form-control input"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="">
            <button className="btn btn-primary form-control" type="submit">
              Sign In
            </button>
          </div>

          <div>
            <img className="or" src={or} alt="" />
          </div>
          <div className="login-socmed-container">
            <img className="login-google" src={logingoogle} alt="" />
            <img className="login-fb" src={loginfacebook} alt="" />
          </div>
          <div className="footer-text">
            Don't Have an Account?{" "}
            <span onClick={() => changeFormType("register")}>Sign Up</span>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
