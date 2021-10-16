import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState, useRef } from "react";
import Modal from "../ModalComponent/Modal/Modal";

// import SigninModal from "../ModalComponent/ModalSigninChoice/ModalSigninChoice";

export default function Layout({ children }) {
  const [modalState, setModalState] = useState({
    isShown: false,
    formType: "register",
    userType: "user", // user, vendor
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

  const showModal = () => {
    setModalState({ ...modalState, isShown: true });
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
  return (
    <div>
      <Navbar showModal={showModal} />
      {children}

      <Footer />

      {modalState.isShown ? (
        <Modal
          onSubmit={onSubmit}
          modalRef={(n) => (modal = n)}
          closeModal={closeModal}
          onKeyDown={onKeyDown}
          onClickOutside={onClickOutside}
          modalState={modalState}
          changeFormType={changeFormType}
        />
      ) : null}
    </div>
  );
}
