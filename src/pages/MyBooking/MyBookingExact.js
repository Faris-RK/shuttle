import React from "react";
import styles from "./MyBooking.module.css";
import { Route, Link } from "react-router-dom";
import MyBooking from "./MyBooking";
import Eticket from "./Eticket";
import StatusBooking from "./StatusBooking";
import EticketDetails from "./EticketDetails";
import { useCallback, useState } from "react";

function MyBookingExact() {
  const [buttonActive, setButtonActive] = useState();
  const buttonSelected = (e) => {
    setButtonActive(e.target.innerHTML);
  };
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div>
          <div className={styles.navWrapper}>
            <Link to={"/myBookingExact/"} className={styles.Link}>
              <h1
                className={
                  buttonActive === "On Going Booking"
                    ? styles.btnActive
                    : styles.textOngoing
                }
                onClick={buttonSelected}
              >
                On Going Booking
              </h1>
            </Link>
            <Link to={"/myBookingExact/Eticket"} className={styles.Link}>
              <h1
                className={
                  buttonActive === "E-Ticket"
                    ? styles.btnActiveEticket
                    : styles.textEticket
                }
                onClick={buttonSelected}
              >
                E-Ticket
              </h1>
            </Link>
          </div>
        </div>
        <Route path={"/myBookingExact"} exact component={StatusBooking} />
        <Route path={"/myBookingExact/myBooking"} component={MyBooking} />
        <Route path={"/myBookingExact/Eticket"} component={Eticket} />
        <Route
          path={"/myBookingExact/EticketDetails"}
          component={EticketDetails}
        />
      </div>
    </React.Fragment>
  );
}

export default MyBookingExact;
