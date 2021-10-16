import React from "react";
import styles from "./Footer.module.css";
import XMockup from "./XMockup.png";
import Logo from "../../assets/logo-footer.png";
import Facebook from "./Facebook.png";
import Instagram from "./Instagram.png";
import Youtube from "./Youtube.png";
import Twitter from "./Twitter.png";

function Footer() {
  return (
    <React.Fragment>
      <div className={styles.footerContainer}>
        <div className={styles.mockupWrapper}>
          <img src={XMockup} className={styles.logoMockup} alt="" />
          <div className={styles.mockupSection}>
            <h1 className={styles.mockupTitle}>
              {" "}
              Shuttle Now Available <br />
              On Any Platform
            </h1>
            <p className={styles.mockupDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className={styles.mockupBtn}>Download</button>
          </div>
        </div>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutWrapper}>
            <div className={styles.shuttleDesc}>
              <img src={Logo} className={styles.logoShuttle} alt="" />
              <p className={styles.shuttleSection}>
                The best bus booking apps in Indonesia. Lorem ipsum dolor sit
                amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
              </p>
              <div className={styles.shuttleIcon}>
                <img src={Facebook} alt="" />
                <img src={Instagram} alt="" />
                <img src={Twitter} alt="" />
                <img src={Youtube} alt="" />
              </div>
            </div>
            <div className={styles.linkDesc}>
              <h1 className={styles.Title}>Links</h1>
              <div className={styles.shuttleSection}>
                <p>Home</p>
                <p>Search Bus</p>
                <p>My Booking</p>
                <p>Check Booking</p>
              </div>
            </div>
            <div className={styles.contact}>
              <h1 className={styles.Title}>Contact Us</h1>
              <p className={styles.shuttleSection}>
                Indonesia Jl. Planet Namek No. 123, Surabaya Telp : 083849420146
                Email : vegeta@dragonball.com
              </p>
            </div>
          </div>
          <div className={styles.copyRight}>
            <div className={styles.concernt}>
              <p>
                &copy;{new Date().getFullYear()} Shuttle. All Rights Reserved
              </p>
              <div className={styles.copyDesc}>
                <p>Privacy</p>
                <p>Security</p>
                <p>Term</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
