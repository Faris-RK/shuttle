import React from "react";
import styles from "./MyBooking.module.css";
import Fab from "@mui/material/Fab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Route, Link } from "react-router-dom";

function MyBooking() {
  return (
    <React.Fragment>
      <div className={styles.detailsContainer}>
        <Link to={"/MyBookingExact"} className={styles.Link}>
          <Fab
            color="#092C4C"
            aria-label="sort"
            variant="extended"
            className={styles.btnback}
            sx={{
              backgroundColor: "transparent",
              alignItems: "center",
              border: "2px solid #0F5996",
            }}
          >
            <ArrowBackIcon />
            &nbsp; Back
          </Fab>
        </Link>
        <div className={styles.detailsWrapper}>
          <div className={styles.titleDetails}>
            <h1 className={styles.titleText}>Order Details</h1>
          </div>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionWrapper}>
              <div className={styles.sectionMain}>
                <p>Order Date</p>
                <p>Order ID</p>
                <p>Total Passanger</p>
                <p>Due Date Payment</p>
                <p>Status Payment</p>
              </div>
              <div className={styles.sectionMainPrice}>
                <strong>
                  <p>Fri,20 Aug 2021</p>
                  <p>BDTR2108187</p>
                  <p>1</p>
                  <p>Sat, 21 Aug 2021 05:00</p>
                  <p className={styles.Status}>Pending</p>
                </strong>
              </div>
            </div>
            <div className={styles.titelSection}>
              <h1 className={styles.textTitle}>Details</h1>
            </div>
            <div className={styles.sectionWrapper}>
              <div className={styles.sectionMain}>
                <p>PT Sinar Jaya Group(Executive)(1x)</p>
                <p>KYM Trans (Executive)(1x)</p>
                <div>
                  <p className={styles.totalPrice}>Total Passanger</p>
                </div>
              </div>
              <div className={styles.sectionPrice}>
                <strong>
                  <p>IDR 150.000</p>
                  <p>IDR 300.000</p>
                  <p className={styles.totalcost}>IDR 450.000</p>
                </strong>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <button className={styles.btnSeePayment}>
                See Payment Instruction
              </button>
            </div>
          </div>
        </div>
        <div className={styles.detailsWrapper}>
          <div className={styles.titleDetails}>
            <h1 className={styles.titleText}>Destination</h1>
          </div>
          <div className={styles.sectionContainer}>
            <div className={styles.titelSection}>
              <h1 className={styles.textTitle}>Details</h1>
            </div>
            <div className={styles.sectionWrapper}>
              <div className={styles.sectionMain}>
                <p>Bus Name</p>
                <p>Date</p>
                <p>Depature Shuttle</p>
                <p className={styles.ArrvialText}>Arrival Shuttle</p>
                <p className={styles.ArrvialText}>Time</p>
              </div>
              <div className={styles.sectionMainPrice}>
                <strong>
                  <p>PT Sinar Jaya Group</p>
                  <p>21 Aug 2021</p>
                  <p>
                    Terminal Kampung <br /> Rambutan Jakarta
                  </p>
                  <p>
                    Terminal Bungurasih <br /> Surabaya{" "}
                  </p>
                  <p>07:00 - 15:00</p>
                </strong>
              </div>
            </div>
            <div className={styles.titelSection}>
              <h1 className={styles.textTitle}>Return</h1>
            </div>
            <div className={styles.sectionWrapper}>
              <div className={styles.sectionMain}>
                <p>Bus Name</p>
                <p>Date</p>
                <p>Depature Shuttle</p>
                <p className={styles.ArrvialText}>Arrival Shuttle</p>
                <p className={styles.ArrvialText}>Time</p>
              </div>
              <div className={styles.sectionMainPrice}>
                <strong>
                  <p>PT Sinar Jaya Group</p>
                  <p>21 Aug 2021</p>
                  <p>
                    Terminal Bungurasih <br /> Surabaya{" "}
                  </p>
                  <p>
                    Terminal Kampung <br /> Rambutan Jakarta
                  </p>
                  <p>07:00 - 15:00</p>
                </strong>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detailsWrapper}>
          <div className={styles.titleDetails}>
            <h1 className={styles.titleText}>Passenger Details</h1>
          </div>
          <div className={styles.sectionContainer}>
            <div className={styles.titelSection}>
              <h1 className={styles.textTitle}>Passenger 1</h1>
            </div>
            <div className={styles.sectionWrapper}>
              <div className={styles.sectionMain}>
                <p>Name</p>
                <p>Depature Seat</p>
                <p>Returen Seat</p>
              </div>
              <div className={styles.sectionMainPrice}>
                <strong>
                  <p>Irham Raziqony</p>
                  <p>12</p>
                  <p>16</p>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MyBooking;
