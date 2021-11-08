import "./PassengerDetail.css";
import { Steps, Button, message } from "antd";
import React, { useState } from "react";

import buslogopd from "../../assets/buslogopd.png";
import repeat from "../../assets/repeat.png";

import lineDown from "../../assets/Line-down.png";
import passengericon from "../../assets/passengericon.png";
import { useSelector, useDispatch } from "react-redux";
import Content1 from "./content1";
import Content2 from "./content2";
import Content3 from "./content3";
import { useLocation } from "react-router-dom";
import {
  storePassengerData,
  storeSelectSeat,
} from "../../redux/actions/bookingData";

import { getBookedSeat } from "../../redux/services/bookingData.service";

// const CssTextField = styled(TextField)({
//   "& .MuiInputBase-input": {
//     width: "301px",
//     height: "48px",
//     padding: "0px",
//     border: "0.7px solid #D0D0D0",
//     boxSizing: "border-box",
//     borderRadius: "8px",
//   },
//   "& .MuiTextField-root": {
//     margin: "0px",
//   },
// });
const { Step } = Steps;

const steps = [
  {
    title: "Book",
  },
  {
    title: "Select Seat",
  },
  {
    title: "Pay",
  },
];

export default function PassengersDetail() {
  const shuttles = useSelector((state) => state.bookingData.shuttles);
  console.log(shuttles)
  // useselector ambil data dari redux
  

  const [current, setCurrent] = useState(0);
  const [fullname, setFullname] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [selectedSeat, setSelectedSeat] = useState();
  const [bookedSeat, setBookedSeat] = useState([])

  const dispatch = useDispatch();

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangeFullname = (e) => {
    const fullname = e.target.value;
    setFullname(fullname);
  };

  const onChangeAge = (e) => {
    const age = e.target.value;
    setAge(age);
  };

  const onChangePhoneNumber = (e) => {
    const phoneNumber = e.target.value;
    setPhoneNumber(phoneNumber);
  };

  const handleClickSelectSeat = (e) => {
    e.preventDefault();
    const passengerData = { fullname, email, age, phoneNumber };
    const params = {
      date: shuttles.date,
      bus_schedule_id: shuttles.busId
      
    }
    getBookedSeat(params).then((response) => {
      setBookedSeat(response?.data?.data)
    });

    dispatch(storePassengerData(passengerData));
  };
  const handleClickContinueToPayment = (e) => {
    e.preventDefault();

    dispatch(storeSelectSeat(selectedSeat));
  };

  return (
    <div className="container">
      <div className="header-steps">
        <Steps className="custom-steps" current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
      </div>
      <div className="container-detail-info-form">
        <div className="detail-info">
          <div className="detail-info-header">
            <div className="bus-logo-pd">
              <img src={buslogopd} alt="" />
            </div>
            <div className="city-1"> {shuttles.destinationCity}</div>
            <div className="repeat-logo">
              <img src={repeat} alt="" />
            </div>
            <div className="city-2"> {shuttles.arrivalCity}</div>
          </div>
          <div>
            <hr className="line-1-pd" />
          </div>
          <div className="container-all-detail">
            <div className="date-schedule-detail">{shuttles.date}</div>
            <div className="pt-scedule-detail">
              PT {shuttles.BusProvider} GROUP{" "}
            </div>
            <div className="bus-class-schedule-detail">Executive</div>
            <div className="schedule-detail-title">Schedule</div>
            <div className="container-schedule-detail">
              <div className="container-time-schedule-detail">
                <div className="departure-time-schedule-detail">
                  {shuttles.departureTime}
                </div>
                <div className="arrival-time-schedule-detail">
                  {shuttles.arrivalTime}
                </div>
              </div>
              <div className="line-down-schedule-detail">
                <img src={lineDown} alt="" />
              </div>
              <div className="container-city-schedule-detail">
                <div className="city-departure-schedule-detail">
                  <div className="city-1">{shuttles.destinationCity}</div>
                  <div className="terminal-1">{shuttles.departure_shuttle}</div>
                </div>
                <div className="city-arrival-schedule-detail">
                  <div className="city-2">{shuttles.arrivalCity}</div>
                  <div className="terminal-2">{shuttles.arrivalShuttle}</div>
                </div>
              </div>
            </div>
            <div className="total-passenger-container">
              <div className="title">Total Passenger</div>
              <div className="total-passenger">
                <img src={passengericon} alt="" />
                <div className="number">1 Passenger</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="steps-content">
            {current === 0 && (
              <Content1
                onChangeFullname={onChangeFullname}
                onChangeEmail={onChangeEmail}
                onChangeAge={onChangeAge}
                onChangePhoneNumber={onChangePhoneNumber}
              />
            )}
            {current === 1 && (
              <Content2
                setSelectedSeat={setSelectedSeat}
                selectedSeat={selectedSeat}
                bookedSeat={bookedSeat}
              />
            )}
            {current === 2 && <Content3 />}
          </div>
          <div className="steps-action">
            {current < steps.length - 2 && (
              <button
                className="select-seat-button"
                onClick={(e) => {
                  handleClickSelectSeat(e);
                  next();
                }}
              >
                Select Seat
              </button>
            )}
            {current === steps.length - 2 && (
              <button
                className="continue-payment"
                onClick={(e) => {
                  handleClickContinueToPayment(e);
                  next();
                }}
              >
                {" "}
                Continue to Payment{" "}
              </button>
            )}

            {current === steps.length - 1 && (
              <button
                className="book-now"
                onClick={() => message.success("Processing complete!")}
              >
                Book now
              </button>
            )}
            {current > 0 && (
              <button className="previous-button" onClick={() => prev()}>
                Previous
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
