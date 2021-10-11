import * as React from "react";
import Logo from "./Logo.png";
import styles from "../Navbar/Navbar.module.css";
import { Link, Route, useHistory } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
      <div className={styles.navbarContainer}>
        <nav>
          <img className={styles.logoNavbar} src={Logo} />
          <div className={styles.navList}>
            <ul>
              <li>Home</li>
              <li>Search Bus</li>
              <li>My Booking</li>
              <li>Check Booking</li>
            </ul>
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.btnSignin}>Sign in</button>
            <button className={styles.btnSignup}>Sign Up</button>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
