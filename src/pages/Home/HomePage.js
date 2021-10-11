import React from "react";
import styles from "./HomePage.module.css";
import background from "./background.jpg";
import SectionHomePage from "./SectionHomePage";

function HomePage() {
  return (
    <React.Fragment>
      <div className={styles.HomePageContainer}>
        <p className={styles.fontBusBook}>BUS BOOKING APP</p>
        <h1 className={styles.titleBanner}>
          Book Your Bus Easily <br /> With Shuttle
        </h1>
        <p className={styles.textBusDesc}>
          The best bus booking apps in indonesia and make easily for order bus
          like we want,A shuttle bus service is a public transport bus service
          designed to quickly transport people between two points. Such a bus
          will 'shuttle' backwards and forwards between the two points, normally
          without any intermediate stops and with a high frequency of trips. ...
          Unlike regular bus routes, shuttles are free of cost.
        </p>
      </div>
      <div>
        <img className={styles.imgBanner} src={background} />
      </div>
      <SectionHomePage />
    </React.Fragment>
  );
}

export default HomePage;
