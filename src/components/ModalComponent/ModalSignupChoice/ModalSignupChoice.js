import React from "react";
import ReactDOM from "react-dom";
import "./ModalSignupChoice.css";
import Logo from "../../../assets/logo-modal.png";
import Close from "../../../assets/closelogo.png";
import MiniLogo from "../../../assets/bus-mini.png";
import UserLogo from "../../../assets/user.png";
import FocusTrap from "focus-trap-react";

function ModalSignupChoice({
  onClickOutside,
  onKeyDown,
  modalRef,

  closeModal,
  showModal,
}) {
  return ReactDOM.createPortal(
    <FocusTrap>
      <aside
        tag="aside"
        role="dialog"
        tabIndex="-1"
        aria-modal="true"
        className="modal-cover"
        onClick={onClickOutside}
        onKeyDown={onKeyDown}
      >
        <div className=" " ref={modalRef}>
          <div className="modal-body modal-signup">
            <div className="sign-modal-container">
              <div className="sign-close-button">
                <img src={Close} alt="close" onClick={closeModal}></img>
              </div>

              <div className="sign-logo-container">
                <img className="logo" src={Logo} alt="logo"></img>
                <p className="logo-text">shuttle</p>
              </div>
              <hr className="line" />
              <p className="text-footer">Choose Sign up</p>
              <div className="sign-in-container">
                <button className="sign-vendor">
                  <img className="mini-logo" src={MiniLogo} alt=""></img>
                  Sign up as Bus Vendor
                </button>

                <button
                  className="sign-user"
                  onClick={() => showModal("form", "register")}
                >
                  <img className="user-logo" src={UserLogo} alt="" />
                  Sign up as User
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
}

export default ModalSignupChoice;
