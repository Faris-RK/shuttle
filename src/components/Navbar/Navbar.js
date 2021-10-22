import * as React from "react";
import Logo from "../../assets/logo.png";
import styles from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";
import logoUser from "../../assets/logoUser.svg";
import logoDropdown from "../../assets/logoDropdown.svg";
import singoutIcon from "../../assets/singoutIcon.svg";
import { useState } from "react";

function Navbar({ showModal }) {
  const [drop, setDrop] = useState(false);
  const [buttonActive, setButtonActive] = useState();

  const dropDown = () => {
    if (drop === false) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };

  const buttonSelected = (e) => {
    setButtonActive(e.target.innerHTML);
  };

  return (
    <React.Fragment>
      <div className={styles.navbarContainer}>
        <nav>
          <Link to={"/"}>
            <img className={styles.logoNavbar} src={Logo} alt="logo" />
          </Link>
          <div className={styles.navList}>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>

              <li>
                <Link to={"/SearchBus"}>Search Bus</Link>
              </li>

              <li>
                <Link to={"/MyBookingExact"}>My Booking</Link>
              </li>
              <li>Check Booking</li>
            </ul>
          </div>
          {/* <div className={styles.btnContainer}>
            <button
              className={styles.btnSignin}
              onClick={() => showModal("choiceSignIn")}
            >
              Sign in
            </button>

            <button
              className={styles.btnSignup}
              onClick={() => showModal("choiceSignUp")}
            >
              Sign Up
            </button>
          </div> */}

          {/* <button className={styles.btnSignup}>Sign Up</button>{" "} */}
          {/* DROPDOWN ============================================== */}

          <div className={styles.ContainerDropdown} onClick={dropDown}>
            <img src={logoUser} />
            <p>Sandi</p>
            <img src={logoDropdown} />
          </div>
          <div
            className={drop === false ? styles.dropdownNone : styles.dropdown}
          >
            <div className={styles.sectionDropdown}>
              <div
                className={
                  buttonActive === "Account"
                    ? styles.btnActive
                    : styles.userDropdown
                }
                // onClick={buttonSelected}
              >
                <img className={styles.iconDropdown} src={logoUser} />
                <p className={styles.titleUser} onClick={buttonSelected}>
                  Account
                </p>
              </div>
              <div
                className={
                  buttonActive === "Sing Out"
                    ? styles.btnActiveSingout
                    : styles.userDropdown
                }
              >
                <img className={styles.iconDropdown} src={singoutIcon} />
                <p className={styles.titleUser} onClick={buttonSelected}>
                  Sing Out
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
