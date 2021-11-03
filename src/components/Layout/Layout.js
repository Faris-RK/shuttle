import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState, useRef } from "react";
import Modal from "../ModalComponent/Modal/Modal";
import ModalSigninChoice from "../ModalComponent/ModalSigninChoice/ModalSigninChoice";
import ModalSignupChoice from "../ModalComponent/ModalSignupChoice/ModalSignupChoice";

// import SigninModal from "../ModalComponent/ModalSigninChoice/ModalSigninChoice";

export default function Layout({ children }) {
  const [modalState, setModalState] = useState({
    isShown: false,
    formType: "register", // register/login
    userType: "user", // user, vendor
    modalType: "choiceSignIn", //choiceSignIn, choiceSignUp, form
  });

  let modal = null;
  let ref = useRef(null);

  const onClickOutside = (event) => {
    if (modal.contains(event.target)) return;
    closeModal();
  };
  console.log(ref);
  const toggleScrollLock = () => {
    document.querySelector("html").classList.toggle("scroll-lock");
  };

  const showModal = (type, formType, userType) => {
    console.log(userType);
    setModalState({
      ...modalState,
      isShown: true,
      modalType: type,
      formType: formType,
      userType: userType,
    });
    toggleScrollLock();
  };

  const closeModal = () => {
    setModalState({ ...modalState, isShown: false, formType: "register" });
    toggleScrollLock();
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 27) {
      closeModal();
    }
  };

  const changeFormType = (type) => {
    setModalState({ ...modalState, formType: type });
  };

  const onSubmit = () => {};

  const renderModalSignin = () => {
    if (modalState.isShown) {
      if (modalState.modalType === "form") {
        return (
          <Modal
            onSubmit={onSubmit}
            modalRef={(n) => (modal = n)}
            closeModal={closeModal}
            onKeyDown={onKeyDown}
            onClickOutside={onClickOutside}
            modalState={modalState}
            changeFormType={changeFormType}
          />
        );
      } else {
        if (modalState.modalType === "choiceSignIn") {
          return (
            <ModalSigninChoice
              closeModal={closeModal}
              showModal={showModal}
              modalState={modalState}
              onSubmit={onSubmit}
              modalRef={(n) => (modal = n)}
              onKeyDown={onKeyDown}
              onClickOutside={onClickOutside}
              changeFormType={changeFormType}
            />
          );
        } else {
          //tampilkan modal sign up
          return (
            <ModalSignupChoice
              closeModal={closeModal}
              showModal={showModal}
              modalState={modalState}
              onSubmit={onSubmit}
              modalRef={(n) => (modal = n)}
              onKeyDown={onKeyDown}
              onClickOutside={onClickOutside}
              changeFormType={changeFormType}
            />
          );
        }
      }
    } else {
      // sembunyikan modal
    }
  };
  return (
    <div>
      <Navbar showModal={showModal} />
      {children}
      <Footer />
      {renderModalSignin()}
    </div>
  );
}
