import * as React from "react";
import Logo from "../../assets/logo.png";
import styles from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar({ showModal }) {
  // let history = useHistory();

  // function handleClick() {
  //   history.push("/SearchBus");
  // }

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

              <li>My Booking</li>
              <li>Check Booking</li>
            </ul>
          </div>
          <div className={styles.btnContainer}>
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
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
