import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../actions/auth";
import "./Form.css";
import logomodal from "../../../assets/logo-modal.png";
import closelogo from "../../../assets/closelogo.png";
import logingoogle from "../../../assets/logingoogle.png";
import loginfacebook from "../../../assets/loginfacebook.png";
import or from "../../../assets/or.png";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export const LoginForm = ({
  props,
  onSubmit,
  changeFormType,
  closeModal,
  formSetting,
}) => {
  const form = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state);
  const { message } = useSelector((state) => state);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    dispatch(login(email, password, formSetting.userType))
      .then(() => {
        props.history.push("/");
        window.location.reload();
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  console.log(formSetting);

  return (
    <div className="flex-container">
      {/* modal gambar kiri */}
      <div className="modal-left">
        <div className="image-overlay"></div>
        <div className="modal-image-container">
          <img
            className="logo-modal"
            src={logomodal}
            alt=""
            onClick={closeModal}
          />

          <p className="text-logo-modal">travel anywhere with us</p>
        </div>
      </div>

      {/* modal form kanan */}
      <div className="modal-right">
        <form onSubmit={handleLogin} ref={form}>
          <img
            className="close-logo"
            src={closelogo}
            alt=""
            onClick={closeModal}
          />
          <div className="login-title">
            {" "}
            {formSetting.userType === "bus_provider"
              ? "Sign in as Bus Vendor"
              : "Sign in to Shuttle"}
          </div>
          <br />
          <div className="form-group">
            <input
              type="email"
              className="form-control input"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={onChangeEmail}
              validations={[required]}
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
              validations={[required]}
            />
          </div>
          <div className="">
            <button
              className="btn btn-primary form-control"
              disabled={loading}
              type="submit"
            >
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
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
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
