import React, { useEffect, useState } from "react";
import { searchBus } from "../../services/auth.service";
import NumberFormat from "react-number-format";
// css  =============================================
import styles from "./SearchBus.module.css";
// Checkbox , Radio Button ============================
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Fab from "@mui/material/Fab";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
// Icons =====================================================
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import sortIconSearcPage from "../../../src/assets/sortIconSearcPage.png";
import SortIcon from "@mui/icons-material/Sort";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import { Provider } from "react-redux";
import { useLocation } from "react-router-dom";

function SearchBus() {
  //  State          ===========================================//
  const [shuttle, setShuttle] = useState([]);
  const [arrivalValue, setArrivalValue] = useState([]);
  const [departureValue, setDepartureValue] = useState([]);
  // const [departureTimeList, setDepartureTimeList] = useState([]);
  const [sortBusList, setSortBusList] = useState([]);

  const location = useLocation();
  console.log(location);

  //  UseEffect      ===========================================//
  useEffect(() => {
    // const params = {
    //   departure_shuttle_id: "f9fafe16-544f-4928-8ed2-6bebc30e0b5a",
    //   arrival_shuttle_id: "81cefdf4-370b-4201-8d5e-816b2fea8d8a",
    //   departure_date: "2021-10-29",
    //   return_date: "2021-10-25",
    //   passenger: 1,
    //   order_type: "RoundTrip",
    //   time: `${departureValue}`,
    // };
    // console.log(location.state.data)
    searchBus(location.state ? location.state.data : {}).then((response) => {
      setShuttle(response?.data?.departure);
      // setDepartureTimeList(response?.data?.departure);
      console.log(response.data.departure);
    });
  }, []);

  useEffect(() => {
    const params = {
      departure_shuttle_id: "f9fafe16-544f-4928-8ed2-6bebc30e0b5a",
      arrival_shuttle_id: "81cefdf4-370b-4201-8d5e-816b2fea8d8a",
      departure_date: "2021-10-29",
      return_date: "2021-10-25",
      passenger: 1,
      order_type: "RoundTrip",
      time: `${departureValue}${arrivalValue}`,
      sort_by: `${sortBusList}`,
      direction: "ASC",
    };
    searchBus(params).then((response) => {
      setShuttle(response?.data?.departure);
      console.log(response.data.departure, "ini data");
    });
  }, [departureValue, arrivalValue, sortBusList]);

  //  Function      ===========================================//
  const handleChangeDeparture = (e) => {
    setDepartureValue(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeArrival = (e) => {
    setArrivalValue(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeSort = (e) => {
    setSortBusList(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(sortBusList);
  };

  const handleClickDeparture = () => {
    setDepartureValue("");
  };
  const handleClickArrival = () => {
    setArrivalValue("");
  };
  // Dropdown Sort   ===========================================//
  const [drop, setDrop] = useState(false);
  const dropDown = () => {
    if (drop === false) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };

  return (
    <div className="container">
      <div className={styles.searchBarWrapper}>
        <SearchBar />
      </div>
      {shuttle && !!shuttle.length && (
        <div className={styles.depatureWrapper}>
          <h1 className={styles.titleDepature}>Choose Depature</h1>
          <p>
            {shuttle[0].destinationCity} &nbsp;
            <ArrowForwardIcon />
            &nbsp; {shuttle[0].arrivalCity} &nbsp;
            {shuttle[0].date}
          </p>
          {/* {shuttle?.map((shuttles) => {
          return (
            <p>
              {shuttles.destinationCity} &nbsp;
              <ArrowForwardIcon />
              &nbsp; {shuttles.arrivalCity} &nbsp;{shuttles.date}
            </p>
          );
        })} */}
        </div>
      )}
      <div className={styles.filterContainer}>
        <div>
          <div className={styles.filterWrapper}>
            <h1 className={styles.filterTitle}>Filter By</h1>
            <div className={styles.titleWrap}>
              <h1 className={styles.titleSide}>
                Depature Time{" "}
                <p style={{ cursor: "pointer" }} onClick={handleClickDeparture}>
                  RESET
                </p>
              </h1>
            </div>
            <div className={styles.schaduleWrap}>
              <RadioGroup
                aria-label="Departure"
                value={departureValue}
                name="radio-buttons-group"
                onChange={handleChangeDeparture}
              >
                {/* {departureTimeList?.map((data, index) => {
                  return ( */}
                <FormControlLabel
                  value="00:00-06:00"
                  control={<Radio />}
                  label="00:00-06:00"
                />
                <FormControlLabel
                  value="06:00-12:00"
                  control={<Radio />}
                  label="06:00-12:00"
                  // onChange={handleChangeDeparture}
                />
                <FormControlLabel
                  value="12:00-18:00"
                  control={<Radio />}
                  label="12:00-18:00"
                  // onChange={handleChangeDeparture}
                />
                <FormControlLabel
                  value="18:00-00:00"
                  control={<Radio />}
                  label="18:00-00:00"
                  // onChange={handleChangeDeparture}
                />
                {/* );
                })} */}
              </RadioGroup>
            </div>
            <div className={styles.titleWrap}>
              <h1 className={styles.titleSide}>
                Arrival{" "}
                <p style={{ cursor: "pointer" }} onClick={handleClickArrival}>
                  RESET
                </p>
              </h1>
            </div>
            <div className={styles.schaduleWrap}>
              <RadioGroup
                aria-label="Arrival"
                value={arrivalValue}
                name="radio-buttons-group"
                onChange={handleChangeArrival}
              >
                {/* {departureTimeList?.map((data) => {
                  return ( */}
                <FormControlLabel
                  value="00:00-06:00"
                  control={<Radio />}
                  label="00:00-06:00"
                />
                <FormControlLabel
                  value="06:00-12:00"
                  control={<Radio />}
                  label="06:00-12:00"
                  // onChange={handleChangeDeparture}
                />
                <FormControlLabel
                  value="12:00-18:00"
                  control={<Radio />}
                  label="12:00-18:00"
                  // onChange={handleChangeDeparture}
                />
                <FormControlLabel
                  value="18:00-00:00"
                  control={<Radio />}
                  label="18:00-00:00"
                  // onChange={handleChangeDeparture}
                />
                {/* );
                })} */}
              </RadioGroup>
            </div>
            <div className={styles.titleWrap}>
              <h1 className={styles.titleSide}>
                Bus Vendor <p>RESET</p>
              </h1>
            </div>
            <div className={styles.schaduleWrap}>
              {shuttle?.map((shuttles) => {
                return (
                  <RadioGroup
                    aria-label="Bus Provider"
                    defaultValue="busProvider"
                    // sx={{
                    //   "& MuiButtonBase": {
                    //     borderRadius: "1px",
                    //   },
                    // }}
                    style={{ borderRadius: "1px" }}
                  >
                    <FormControlLabel
                      value={shuttles.BusProvider}
                      control={<Checkbox />}
                      type="radioButton"
                      label={shuttles.BusProvider}
                    />
                  </RadioGroup>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.DescContainer}>
          <button className={styles.btnSort} onClick={dropDown}>
            <img src={sortIconSearcPage} />
            &nbsp; Sort
          </button>
          <div
            className={
              drop === false ? styles.dropdownNone : styles.dropdownctn
            }
          >
            <h1 className={styles.titleDropdown}>Sort by</h1>
            <RadioGroup
              aria-label="Sort"
              value={sortBusList}
              name="radio-buttons-group"
              className={styles.radioButtonsGroup}
              onChange={handleChangeSort}
            >
              <FormControlLabel
                value="price"
                control={<Radio />}
                label="Lowest price"
              />
              <FormControlLabel
                value="departure_time"
                control={<Radio />}
                label="Earliest depature time"
              />
              <FormControlLabel
                value="arrival_time"
                control={<Radio />}
                label="Earliest arival time"
              />
              <FormControlLabel
                value="duration"
                control={<Radio />}
                label="Shortest duration"
              />
              <button
                className={styles.btnDropdown}
                onSubmit={handleSubmit}
                type="submit"
              >
                Sort
              </button>
            </RadioGroup>
          </div>
          {shuttle?.map((shuttles) => {
            return (
              <div className={styles.DescWrapper}>
                <div className={styles.titleDescription} key={shuttles.busId}>
                  {shuttles.BusProvider}
                  <br />
                  <p className={styles.descClass}>executive</p>
                </div>
                <div>
                  <p className={styles.shuttleText}>
                    {shuttles.departure_shuttle}
                    <br />
                    {shuttles.destinationCity}
                  </p>
                  <p className={styles.timeText}>{shuttles.departureTime}</p>{" "}
                  <br /> <p className={styles.dateText}>{shuttles.date}</p>
                </div>
                <div className={styles.btnArrow}>
                  {" "}
                  <Fab
                    color="primary"
                    aria-label="arrow"
                    sx={{
                      backgroundColor: "#0F5996",
                      height: "5px",
                      width: "40px",
                      boxShadow: "none",
                      // justifyContent: "center",
                    }}
                  >
                    <ArrowForwardIcon />
                  </Fab>
                  <br /> 8hr 00 mnt
                </div>
                <div className={styles.shuttlesWrapper}>
                  <p className={styles.shuttleText}>
                    {" "}
                    {shuttles.arrivalShuttle}
                    <br />
                    {shuttles.arrivalCity}
                  </p>{" "}
                  <p className={styles.timeText}> {shuttles.arrivalTime}</p>
                  <br />
                  <p className={styles.dateText}> {shuttles.date}</p>
                </div>
                <div>
                  <h1 className={styles.descPrice}>
                    <NumberFormat
                      value={shuttles.price}
                      displayType="text"
                      thousandSeparator="."
                      decimalSeparator=","
                      prefix=" IDR "
                    />{" "}
                    /<p className={styles.seats}>seat</p>
                  </h1>
                  <button className={styles.btnBook}>Booking</button>
                  <br />
                  <p className={styles.availableSeatTxt}>
                    {" "}
                    Available Seat :{shuttles.seats}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchBus;
