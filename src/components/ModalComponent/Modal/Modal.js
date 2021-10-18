import React from "react";
import ReactDOM from "react-dom";
import RegisterForm from "../Form/Register";
import LoginForm from "../Form/Login";
import FocusTrap from "focus-trap-react";
import "./Modal.css";

export const Modal = ({
  onClickOutside,
  onKeyDown,
  modalRef,
  onSubmit,
  modalState,
  changeFormType,
}) => {
  console.log(changeFormType);
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
        <div className="modal-area" ref={modalRef}>
          <div className="modal-body modal-signup">
            {modalState.formType === "register" ? (
              <RegisterForm
                formSetting={modalState}
                onSubmit={onSubmit}
                changeFormType={changeFormType}
              />
            ) : (
              <LoginForm
                formSetting={modalState}
                onSubmit={onSubmit}
                changeFormType={changeFormType}
              />
            )}
          </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};

export default Modal;
