import "./Form.css";
// import busmodal from "../../../assets/busmodal.png";
import logomodal from "../../../assets/logo-modal.png";
import closelogo from "../../../assets/closelogo.png";
import logingoogle from "../../../assets/logingoogle.png";
import loginfacebook from "../../../assets/loginfacebook.png";
import or from "../../../assets/or.png";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { isEmail } from "validator";

import { register } from "../../../actions/auth";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export const RegisterForm = ({ onSubmit, changeFormType, closeModal }) => {
  const form = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state);
  console.log(message);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    dispatch(register(username, email, password))
      .then(() => {
        setSuccessful(true);
      })
      .catch((error) => {
        console.log(error);
        setSuccessful(false);
      });
  };

  return (
    <div className="flex-container auth-form">
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
        <form onSubmit={handleRegister} ref={form}>
          <img
            className="close-logo"
            src={closelogo}
            alt=""
            onClick={closeModal}
          />
          <div className="login-title">Sign Up to Shuttle</div>
          <br />

          <div className="form-group">
            <input
              type="text"
              className="form-control input"
              id="name"
              placeholder="Full name"
              value={username}
              onChange={onChangeUsername}
              validations={[required, vusername]}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control input"
              id="birthday"
              placeholder="Search your birthday"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control input"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={onChangeEmail}
              validations={[required, validEmail]}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={onChangePassword}
              validations={[required, vpassword]}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Confirm your password"
            />
          </div>
          <div className="">
            <button className="btn btn-primary form-control" type="submit">
              Sign Up
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
            Already Have an Account?{" "}
            <span onClick={() => changeFormType("login")}>Sign In</span>
          </div>
          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
export default RegisterForm;
