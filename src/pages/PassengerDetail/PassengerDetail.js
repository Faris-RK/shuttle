import "./PassengerDetail.css";
import { Steps, Button, message } from "antd";
import React, { useState } from "react";

import buslogopd from "../../assets/buslogopd.png";
import repeat from "../../assets/repeat.png";

import lineDown from "../../assets/Line-down.png";
import passengericon from "../../assets/passengericon.png";

import Content1 from "./content1";
import Content2 from "./content2";
import Content3 from "./content3";
import StepsContent from "./Steps";

const { Step } = Steps;

const steps = [
  {
    title: "Book",
    content: <Content1 />,
  },
  {
    title: "Select Seat",
    content: <Content2 />,
  },
  {
    title: "Pay",
    content: <Content3 />,
  },
];

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
export default function PassengersDetail() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };
  const book = () => {
    setCurrent(current === 1);
  };

  const prev = () => {
    setCurrent(current - 1);
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
            <div className="city-1">Jakarta</div>
            <div className="repeat-logo">
              <img src={repeat} alt="" />
            </div>
            <div className="city-2">Surabaya</div>
          </div>
          <div>
            <hr className="line-1-pd" />
          </div>
          <div className="container-all-detail">
            <div className="date-schedule-detail">Sat, 21 Aug 2021</div>
            <div className="pt-scedule-detail">PT Sinar Jaya Group </div>
            <div className="bus-class-schedule-detail">Executive</div>
            <div className="schedule-detail-title">Schedule</div>
            <div className="container-schedule-detail">
              <div className="container-time-schedule-detail">
                <div className="departure-time-schedule-detail">13.10</div>
                <div className="arrival-time-schedule-detail">21.00</div>
              </div>
              <div className="line-down-schedule-detail">
                <img src={lineDown} alt="" />
              </div>
              <div className="container-city-schedule-detail">
                <div className="city-departure-schedule-detail">
                  <div className="city-1">Jakarta</div>
                  <div className="terminal-1">
                    Terminal Kampung Rambutan Jakarta
                  </div>
                </div>
                <div className="city-arrival-schedule-detail">
                  <div className="city-2">Surabaya</div>
                  <div className="terminal-2">Terminal Bungurasih Surabaya</div>
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
          <div>
            <hr className="line-1-pd" />
          </div>
          <div className="container-all-detail">
            <div className="date-schedule-detail">Sat, 28 Aug 2021</div>
            <div className="pt-scedule-detail">PT Sinar Jaya Group </div>
            <div className="bus-class-schedule-detail">Executive</div>
            <div className="schedule-detail-title">Schedule</div>
            <div className="container-schedule-detail">
              <div className="container-time-schedule-detail">
                <div className="departure-time-schedule-detail">07.00</div>
                <div className="arrival-time-schedule-detail">15.00</div>
              </div>
              <div className="line-down-schedule-detail">
                <img src={lineDown} alt="" />
              </div>
              <div className="container-city-schedule-detail">
                <div className="city-departure-schedule-detail">
                  <div className="city-1">Surabaya</div>
                  <div className="terminal-1">Terminal Bungurasih Surabaya</div>
                </div>
                <div className="city-arrival-schedule-detail">
                  <div className="city-2">Jakarta</div>
                  <div className="terminal-2">
                    Terminal Kampung Rambutan Jakarta
                  </div>
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
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current < steps.length - 2 && (
              <button className="select-seat-button" onClick={() => next()}>
                Select Seat
              </button>
            )}
            {current === steps.length - 2 && (
             <button className="continue-payment" onClick={() => next()}> Continue to Payment </button>
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
