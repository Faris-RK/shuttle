import React from "react";
import styles from "./MyBooking.module.css";
import { Route, Link } from "react-router-dom";

function StatusBooking() {
  return (
    <React.Fragment>
      <div className={styles.onGoingContainer}>
        <Link to={"/myBookingExact/myBooking"} className={styles.Link}>
          <div className={styles.onGoingSection}>
            <p>
              Order ID <br />
              <br />
              <strong>BDTR2108187</strong>
            </p>
            <p>
              Amount to Pay <br />
              <br />
              <strong>IDR 450.000</strong>
            </p>
            <p>
              Destination <br />
              <br />
              <strong>
                Jakarta - Surabaya
                <br />
                (Roundtrip)
              </strong>
            </p>
          </div>
          <div className={styles.statusPay}>
            <h1 className={styles.titleStatus}>Status Payment : Pending</h1>
          </div>
        </Link>
      </div>
      {/* <Route path={"/myBookingExact/myBooking"} exact component={MyBooking} /> */}
    </React.Fragment>
  );
}

export default StatusBooking;
