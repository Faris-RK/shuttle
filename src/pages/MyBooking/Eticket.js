import React from "react";
import styles from "./MyBooking.module.css";
import { Link } from "react-router-dom";

function Eticket() {
  return (
    <React.Fragment>
      <div className={styles.onGoingContainer}>
        <Link to={"/myBookingExact/EticketDetails"} className={styles.Link}>
          <div className={styles.onGoingSection}>
            <p>
              Depature Ticket <br />
              <br />
              <strong>BDTR2108187</strong>
            </p>
            <p>
              Depature Date <br />
              <br />
              <strong>IDR 450.000</strong>
            </p>
            <p>
              Destination <br />
              <br />
              <strong>Jakarta - Surabaya</strong>
            </p>
          </div>
          <div className={styles.statusPay}>
            <h1 className={styles.titleStatus}>
              Status Ticket : Waiting Check In
            </h1>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Eticket;
