import React from "react";
import "./ModalSigninChoice.css";
import Logo from "../../../assets/logo-modal.png";
import Close from "../../../assets/closelogo.png";
import MiniLogo from "../../../assets/bus-mini.png";
import UserLogo from "../../../assets/user.png";

function ModalSignin() {
  return (
    <div className="sign-modal-container">
      <div className="sign-close-button">
        <img src={Close} alt="close"></img>
      </div>

      <div className="sign-logo-container">
        <img className="logo" src={Logo} alt="logo"></img>
        <p className="logo-text">shuttle</p>
      </div>
      <hr className="line" />
      <p className="text-footer">Choose Sign in</p>
      <div className="sign-in-container">
        <button className="sign-vendor">
          <img className="mini-logo" src={MiniLogo} alt=""></img>
          Sign in as Bus Vendor
        </button>

        <button className="sign-user">
          <img className="user-logo" src={UserLogo} alt=""></img>
          Sign in as User
        </button>
      </div>
    </div>
  );
}

export default ModalSignin;
