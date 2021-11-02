import "./PassengerDetail.css";
import { Steps, Button, message } from "antd";
import React, { useState } from "react";
import stepbar from "../../assets/stepbar.png";
import { styled } from "@mui/material/styles";
import buslogopd from "../../assets/buslogopd.png";
import repeat from "../../assets/repeat.png";
import exstep from "../../assets/exstep.png";
import lineDown from "../../assets/Line-down.png";
import passengericon from "../../assets/passengericon.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import bookedIcon from "../../assets/booked-icon.png";
import selectedIcon from "../../assets/selected-icon.png";
import availableIcon from "../../assets/available-icon.png";
import driverIcon from "../../assets/driver-icon.png";
import line2 from "../../assets/line2.png";
import orderDetail from "../../assets/orderdetail.png";

const CssTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    width: "301px",
    height: "48px",
    padding: "0px",
    border: "0.7px solid #D0D0D0",
    boxSizing: "border-box",
    borderRadius: "8px",
  },
  "& .MuiTextField-root": {
    margin: "0px",
  },
});
export default function PassengersDetail() {
  return (
    <div className="container">
      <div className="stepbar">
        <img src={exstep} alt="" />
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
        {/* <div className="passenger-detail-form">
          <div className="header">
            <div className="title-detail-form">Passenger Detail</div>
          </div> */}
          {/* <div className="passenger-1">Passenger 1</div>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="form-container">
              <div className="form-1">
                <div className="fullname">
                  <CssTextField
                    required
                    id="outlined-required"
                    label="Fullname"
                    type="name"
                    placeholder="Input full name"
                    className="text-field"
                  />
                </div>
                <div className="email">
                  <CssTextField
                    required
                    id="outlined-required"
                    label="Email"
                    type="email"
                    placeholder="Input email"
                  />
                </div>
              </div>
              <div className="form-2">
                <div className="age">
                  <CssTextField
                    required
                    id="outlined-required"
                    label="Age"
                    type="age"
                    placeholder="Input age"
                  />
                </div>
                <div className="form-2">
                  <div className="phone-number">
                    <CssTextField
                      required
                      id="outlined-required"
                      label="Phone Number"
                      type="number"
                      placeholder="Input phone number"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Box> */}
          {/* <button className="select-seat-button">Select Seat</button>
        </div> */}

        {/* seat UI */}

        {/* <div className="departure-seat-container">
          <div className="departure-seat-header">
            <div className="title"> Departure Seat - Passanger 1</div>
          </div>
          <div className="seat-content">
            <div className="guide-seat-icon">
              <ul className="listed-seat-icon">
                <li className="icon-1">
                  <img src={bookedIcon} alt="" />
                </li>
                <li className="icon-2">
                  <img src={selectedIcon} alt="" />
                </li>
                <li className="icon-3">
                  <img src={availableIcon} alt="" />
                </li>
              </ul>
            </div>
            <div className="seat-card">
              <img className="driver-icon" src={driverIcon} alt="" />
              <div className="seat-container">
                <div className="seat-left">
                  <ul className="seat-left-1-listed">
                    <li>
                      <button className="seat-row-1" />
                    </li>
                    <li>
                      <button className="seat-row-1" />
                    </li>
                    <li>
                      <button className="seat-row-1" />
                    </li>
                    <li>
                      <button className="seat-row-1" />
                    </li>
                    <li>
                      <button className="seat-row-1" />
                    </li>
                    <li>
                      <button className="seat-row-1" />
                    </li>
                    <li>
                      <button className="seat-row-1" />
                    </li>
                    <li>
                      <button className="seat-row-1" />
                    </li>
                    <li>
                      <button className="seat-row-1" />
                    </li>
                    <li>
                      <button className="seat-row-1" />
                    </li>
                  </ul>
                  <ul className="seat-left-2-listed">
                    <li>
                      <button className="seat-row-2" />
                    </li>
                    <li>
                      <button className="seat-row-2" />
                    </li>
                    <li>
                      <button className="seat-row-2" />
                    </li>
                    <li>
                      <button className="seat-row-2" />
                    </li>
                    <li>
                      <button className="seat-row-2" />
                    </li>
                    <li>
                      <button className="seat-row-2" />
                    </li>
                    <li>
                      <button className="seat-row-2" />
                    </li>
                    <li>
                      <button className="seat-row-2" />
                    </li>
                    <li>
                      <button className="seat-row-2" />
                    </li>
                    <li>
                      <button className="seat-row-2" />
                    </li>
                  </ul>
                </div>
                <img className="line2" src={line2} alt="" />
                <div className="seat-right">
                  <ul className="seat-right-1-listed">
                    <li>
                      <button className="seat-row-3" />
                    </li>
                    <li>
                      <button className="seat-row-3" />
                    </li>
                    <li>
                      <button className="seat-row-3" />
                    </li>
                    <li>
                      <button className="seat-row-3" />
                    </li>
                    <li>
                      <button className="seat-row-3" />
                    </li>
                    <li>
                      <button className="seat-row-3" />
                    </li>
                    <li>
                      <button className="seat-row-3" />
                    </li>
                    <li>
                      <button className="seat-row-3" />
                    </li>
                    <li>
                      <button className="seat-row-3" />
                    </li>
                    <li>
                      <button className="seat-row-3" />
                    </li>
                  </ul>
                  <ul className="seat-right-2-listed">
                    <li>
                      <button className="seat-row-4 active" />
                    </li>
                    <li>
                      <button className="seat-row-4" />
                    </li>
                    <li>
                      <button className="seat-row-4" />
                    </li>
                    <li>
                      <button className="seat-row-4" />
                    </li>
                    <li>
                      <button className="seat-row-4" />
                    </li>
                    <li>
                      <button className="seat-row-4" />
                    </li>
                    <li>
                      <button className="seat-row-4" />
                    </li>
                    <li>
                      <button className="seat-row-4" />
                    </li>
                    <li>
                      <button className="seat-row-4" />
                    </li>
                    <li>
                      <button className="seat-row-4" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button className="continue-payment"> Continue to Payment </button>
        </div> */}

        {/* order detail */}
        <div className="order-detai-container">
          <img className="orderdetail-image" src={orderDetail} alt="" />
          <button className="book-now">Book now</button>
        </div>
      </div>
    </div>
  );
}
