import React from "react";
import styles from "./HomePage.module.css";
import icon from "./icon.png";

function SectionHomePage() {
  return (
    <React.Fragment>
      <div className={styles.sectionContainer}>
        <div className={styles.sectiontext}>
          <p className={styles.text}>OUR SERVICE</p>
          <h1 className={styles.headTitle}>
            Shuttle Give Many <br /> Benefit to Users
          </h1>
          <p className={styles.headDesc}>
            Make easily for your trip anywhere and evrywhere, also make your
            happines for trip
          </p>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cardSection}>
            <img className={styles.iconSection} src={icon} alt="" />
            <h1 className={styles.cardTitle}>Easy Booking</h1>
            <p className={styles.cardDesc}>
              Make your trip easily when use this app and many hours can save by
              this app
            </p>
            <a href=" " className={styles.cardTxtLink} alt="">  
              Read More
            </a>
          </div>
          <div className={styles.cardSection}>
            <img className={styles.iconSection} src={icon} alt="" />
            <h1 className={styles.cardTitle}>24/7 Helpdesk Support</h1>
            <p className={styles.cardDesc}>
              Make your trip easily when use this app and many hours can save by
              this app
            </p>
            <a href=" " className={styles.cardTxtLink}>
              Read More
            </a>
          </div>
          <div className={styles.cardSection}>
            <img className={styles.iconSection} src={icon} alt="" />
            <h1 className={styles.cardTitle}>Easy of Payment</h1>
            <p className={styles.cardDesc}>
              Make your trip easily when use this app and many hours can save by
              this app
            </p>
            <a href=" " className={styles.cardTxtLink}>
              Read More
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SectionHomePage;
