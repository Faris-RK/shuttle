import "./Form.css";
// import busmodal from "../../../assets/busmodal.png";
import logomodal from "../../../assets/logo-modal.png";
import closelogo from "../../../assets/closelogo.png";
import logingoogle from "../../../assets/logingoogle.png";
import loginfacebook from "../../../assets/loginfacebook.png";
import or from "../../../assets/or.png";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { DatePicker } from "antd";
import DatePicker from "react-datepicker";
// import DatePicker from "react-modern-calendar-datepicker";

import { register } from "../../../actions/auth";

export const RegisterForm = ({
  onSubmit,
  changeFormType,
  closeModal,
  formSetting,
}) => {
  const form = useRef();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState(null);
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state);
  console.log(message);
  const dispatch = useDispatch();

  useEffect(() => {
    setBirthday("");
  }, []);
  const onChangeFullname = (e) => {
    const fullname = e.target.value;
    setFullname(fullname);
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

    dispatch(
      register(fullname, email, birthday, password, formSetting.userType)
    )
      .then(() => {
        setSuccessful(true);
      })
      .catch((error) => {
        console.log(error);
        setSuccessful(false);
      });
  };
  console.log(formSetting);

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
          <div className="login-title">
            {formSetting.userType === "bus_provider"
              ? "Sign up as Bus Vendor"
              : "Sign Up to Shuttle"}
          </div>
          <br />

          <div className="form-group">
            <input
              type="text"
              className="form-control input"
              id="name"
              placeholder="Full name"
              value={fullname}
              onChange={onChangeFullname}
            />
          </div>
          <div className="form-group">
            <DatePicker
              // value={birthday}
              // onChange={setBirthday}
              // inputPlaceholder="Select a day"
              // shouldHighlightWeekends

              placeholderText="Select your birthday"
              dateFormat="yyyy-MM-dd"
              className="form-control"
              onChange={(date) => setBirthday(date)}
              selected={birthday}
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
