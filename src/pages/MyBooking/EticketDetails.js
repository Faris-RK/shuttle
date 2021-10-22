import React from "react";
import styles from "./MyBooking.module.css";
import Fab from "@mui/material/Fab";
import line from "../../assets/line.svg";
import Acicon from "../../assets/Acicon.png";
import toiletIcon from "../../assets/toiletIcon.png";
import foodIcon from "../../assets/foodIcon.png";
import charger from "../../assets/charger.png";
import seats from "../../assets/seats.png";
import wifiIcon from "../../assets/wifiIcon.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

function EticketDetails() {
  return (
    <React.Fragment>
      <div className={styles.detailsContainer}>
        <Link to={"/MyBookingExact/Eticket"} className={styles.Link}>
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
                <p>Order ID</p>
                <p>Ticket Number</p>
                <p>Bus Name</p>
                <p>Destination</p>
                <p>Due Date Payment</p>
                <p>Ticket Status</p>
              </div>
              <div className={styles.sectionMainPrice}>
                <strong>
                  <p>BDTR2108187</p>
                  <p>1234567890</p>
                  <p>PT Sinar Jaya Group</p>
                  <p>
                    Jakarta <ArrowForwardIcon /> Surabaya
                  </p>
                  <p>Sat,21 Aug 2021</p>
                  <p className={styles.Status}>Waiting Check-in</p>
                </strong>
              </div>
            </div>
          </div>
          <div className={styles.titelSection}>
            <h1 className={styles.textTitle}>Schadule</h1>
          </div>
          <div className={styles.schaduleWrapper}>
            <div className={styles.sectionMain}>
              <p className={styles.headschaduleText}>13.10</p>
              <p className={styles.schaduleText} style={{ color: "#ABB3BB" }}>
                8hr0mnt
              </p>
              <br />
              <p className={styles.bottomText}>21.00</p>
            </div>
            <>
              <img className={styles.lineicon} src={line} alt="" />
            </>
            <div className={styles.locationDesc}>
              <strong>
                <p className={styles.headschaduleText}>
                  Jakarta <br />{" "}
                  <p className={styles.locText}>
                    Terminal Kampung Rambutan <br /> Jakarta
                  </p>
                </p>
                {/* <p className={styles.schaduleText}></p> */}
                <br />
                <p className={styles.bottomschaduleText}>
                  {" "}
                  Surabaya <br />{" "}
                  <p className={styles.locText}>
                    Terminal Bungurasih <br /> Surabaya
                  </p>
                </p>
              </strong>
            </div>
          </div>
          <div className={styles.titelSection}>
            <h1 className={styles.textTitle}>Fasilities</h1>
          </div>
          <div className={styles.iconFasilities}>
            <div>
              <img src={Acicon} />
              <p>
                Air <br />
                Conditioner
              </p>
            </div>
            <div>
              <img src={toiletIcon} />
              <p>Toilet</p>
            </div>
            <div>
              <img src={foodIcon} />
              <p>Free Meal</p>
            </div>
            <div>
              <img src={charger} />
              <p>Charger</p>
            </div>
            <div>
              <img src={seats} />
              <p>
                Comfortable
                <br />
                Seat
              </p>
            </div>
            <div>
              <img src={wifiIcon} />
              <p>Wifi</p>
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

export default EticketDetails;
