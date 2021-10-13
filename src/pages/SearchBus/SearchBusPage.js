import React from "react";
import styles from "./SearchBus.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import SortIcon from "@mui/icons-material/Sort";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function SearchBus() {
  return (
    <React.Fragment>
      <div className={styles.Container}>
        <div className={styles.depatureWrapper}>
          <h1 className={styles.titleDepature}>Choose Depature</h1>
          <p>
            Jakarta&nbsp;
            <ArrowForwardIcon />
            &nbsp; Surabaya &nbsp;Sat,21 Aug 2021
          </p>
        </div>
        <div className={styles.filterContainer}>
          <div>
            <div className={styles.filterWrapper}>
              <h1 className={styles.filterTitle}>Filter By</h1>
              <div className={styles.titleWrap}>
                <h1 className={styles.titleSide}>
                  Depature Time <p>RESET</p>
                </h1>
              </div>
              <div className={styles.schaduleWrap}>
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="00:00 - 06:00"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="06:00 - 12:00"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="12:00 - 18:00"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="18:00 - 00:00"
                  labelPlacement="end"
                />
              </div>
              <div className={styles.titleWrap}>
                <h1 className={styles.titleSide}>
                  Arrival <p>RESET</p>
                </h1>
              </div>
              <div className={styles.schaduleWrap}>
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="00:00 - 06:00"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="06:00 - 12:00"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="12:00 - 18:00"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="18:00 - 00:00"
                  labelPlacement="end"
                />
              </div>
              <div className={styles.titleWrap}>
                <h1 className={styles.titleSide}>
                  Bus Vendor <p>RESET</p>
                </h1>
              </div>
              <div className={styles.schaduleWrap}>
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="KYM Trans"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="PT Sumber Trans"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="DAMRI"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="Harapan Jaya"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="KYM Trans"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="PT Sumber Bahagia"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="DAMRI"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="Harapan Jaya"
                  labelPlacement="end"
                />
              </div>
            </div>
          </div>
          <div className={styles.DescContainer}>
            <Fab
              color="primary"
              aria-label="sort"
              variant="extended"
              className={styles.btnSort}
              sx={{ backgroundColor: "#0F5996", alignItems: "center" }}
            >
              <ArrowUpwardIcon />
              <SortIcon />
              &nbsp; Sort
            </Fab>
            <div className={styles.DescWrapper}>
              <h1 className={styles.titleDescription}>
                KYM Trans
                <br />
                <p className={styles.descClass}>executive</p>
              </h1>
              <p>
                Terminal Lebak Bulus <br /> 13:00 <br /> Sat,21 Augustus2021
              </p>
              <p>
                {" "}
                <Fab
                  color="primary"
                  aria-label="arrow"
                  className={styles.btnArrow}
                  sx={{
                    backgroundColor: "#0F5996",
                    height: "5px",
                    width: "40px",
                  }}
                >
                  <ArrowForwardIcon />
                </Fab>
                <br /> 8hr 00 mnt
              </p>
              <p>
                Terminal Bungurasih Surabaya <br /> 21:00 <br /> Sat,21
                Augustus2021
              </p>
              <p>
                <h1 className={styles.descPrice}>IDR 250.000/seat</h1>
                <br />
                <button className={styles.btnBook}>Booking</button>
                <br />
                Available Seat : 20
              </p>
            </div>
            <div className={styles.DescWrapper}>
              <h1 className={styles.titleDescription}>
                KYM Trans
                <br />
                <p className={styles.descClass}>executive</p>
              </h1>
              <p>
                Terminal Lebak Bulus <br /> 13:00 <br /> Sat,21 Augustus2021
              </p>
              <p>
                {" "}
                <Fab
                  color="primary"
                  aria-label="arrow"
                  className={styles.btnArrow}
                  sx={{
                    backgroundColor: "#0F5996",
                    height: "5px",
                    width: "40px",
                  }}
                >
                  <ArrowForwardIcon />
                </Fab>
                <br /> 8hr 00 mnt
              </p>
              <p>
                Terminal Bungurasih Surabaya <br /> 21:00 <br /> Sat,21
                Augustus2021
              </p>
              <p>
                <h1 className={styles.descPrice}>IDR 250.000/seat</h1>
                <br />
                <button className={styles.btnBook}>Booking</button>
                <br />
                Available Seat : 20
              </p>
            </div>
            <div className={styles.DescWrapper}>
              <h1 className={styles.titleDescription}>
                KYM Trans
                <br />
                <p className={styles.descClass}>executive</p>
              </h1>
              <p>
                Terminal Lebak Bulus <br /> 13:00 <br /> Sat,21 Augustus2021
              </p>
              <p>
                {" "}
                <Fab
                  color="primary"
                  aria-label="arrow"
                  className={styles.btnArrow}
                  sx={{
                    backgroundColor: "#0F5996",
                    height: "5px",
                    width: "40px",
                  }}
                >
                  <ArrowForwardIcon />
                </Fab>
                <br /> 8hr 00 mnt
              </p>
              <p>
                Terminal Bungurasih Surabaya <br /> 21:00 <br /> Sat,21
                Augustus2021
              </p>
              <p>
                <h1 className={styles.descPrice}>IDR 250.000/seat</h1>
                <br />
                <button className={styles.btnBook}>Booking</button>
                <br />
                Available Seat : 20
              </p>
            </div>
            <div className={styles.DescWrapper}>
              <h1 className={styles.titleDescription}>
                KYM Trans
                <br />
                <p className={styles.descClass}>executive</p>
              </h1>
              <p>
                Terminal Lebak Bulus <br /> 13:00 <br /> Sat,21 Augustus2021
              </p>
              <p>
                {" "}
                <Fab
                  color="primary"
                  aria-label="arrow"
                  className={styles.btnArrow}
                  sx={{
                    backgroundColor: "#0F5996",
                    height: "5px",
                    width: "40px",
                  }}
                >
                  <ArrowForwardIcon />
                </Fab>
                <br /> 8hr 00 mnt
              </p>
              <p>
                Terminal Bungurasih Surabaya <br /> 21:00 <br /> Sat,21
                Augustus2021
              </p>
              <p>
                <h1 className={styles.descPrice}>IDR 250.000/seat</h1>
                <br />
                <button className={styles.btnBook}>Booking</button>
                <br />
                Available Seat : 20
              </p>
            </div>
            <div className={styles.DescWrapper}>
              <h1 className={styles.titleDescription}>
                KYM Trans
                <br />
                <p className={styles.descClass}>executive</p>
              </h1>
              <p>
                Terminal Lebak Bulus <br /> 13:00 <br /> Sat,21 Augustus2021
              </p>
              <p>
                {" "}
                <Fab
                  color="primary"
                  aria-label="arrow"
                  className={styles.btnArrow}
                  sx={{
                    backgroundColor: "#0F5996",
                    height: "5px",
                    width: "40px",
                  }}
                >
                  <ArrowForwardIcon />
                </Fab>
                <br /> 8hr 00 mnt
              </p>
              <p>
                Terminal Bungurasih Surabaya <br /> 21:00 <br /> Sat,21
                Augustus2021
              </p>
              <p>
                <h1 className={styles.descPrice}>IDR 250.000/seat</h1>
                <br />
                <button className={styles.btnBook}>Booking</button>
                <br />
                Available Seat : 20
              </p>
            </div>
            <div className={styles.DescWrapper}>
              <h1 className={styles.titleDescription}>
                KYM Trans
                <br />
                <p className={styles.descClass}>executive</p>
              </h1>
              <p>
                Terminal Lebak Bulus <br /> 13:00 <br /> Sat,21 Augustus2021
              </p>
              <p>
                {" "}
                <Fab
                  color="primary"
                  aria-label="arrow"
                  className={styles.btnArrow}
                  sx={{
                    backgroundColor: "#0F5996",
                    height: "5px",
                    width: "40px",
                  }}
                >
                  <ArrowForwardIcon />
                </Fab>
                <br /> 8hr 00 mnt
              </p>
              <p>
                Terminal Bungurasih Surabaya <br /> 21:00 <br /> Sat,21
                Augustus2021
              </p>
              <p>
                <h1 className={styles.descPrice}>IDR 250.000/seat</h1>
                <br />
                <button className={styles.btnBook}>Booking</button>
                <br />
                Available Seat : 20
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SearchBus;
