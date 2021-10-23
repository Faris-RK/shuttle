import React from "react";
import styles from "./HomePage.module.css";

import SectionHomePage from "./SectionHomePage";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import "./container.css";

function HomePage() {
  return (
    <React.Fragment>
      <div className={styles.MastHead}>
        <div className="container">
          <div className={styles.HomePageContainer}>
            <p className={styles.fontBusBook}>BUS BOOKING APP</p>
            <h1 className={styles.titleBanner}>
              Book Your Bus Easily <br /> With Shuttle
            </h1>
            <p className={styles.textBusDesc}>
              The best bus booking apps in indonesia and make easily for order
              bus like we want,A shuttle bus service is a public transport bus
              service designed to quickly transport people between two points.
              Such a bus will 'shuttle' backwards and forwards between the two
              points, normally without any intermediate stops and with a high
              frequency of trips. ... Unlike regular bus routes, shuttles are
              free of cost.
            </p>
            <SearchBar />
          </div>
        </div>
      </div>

      <SectionHomePage />
    </React.Fragment>
  );
}

export default HomePage;
