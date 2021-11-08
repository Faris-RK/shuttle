import bookedIcon from "../../assets/booked-icon.png";
import selectedIcon from "../../assets/selected-icon.png";
import availableIcon from "../../assets/available-icon.png";
import driverIcon from "../../assets/driver-icon.png";
import line2 from "../../assets/line2.png";
import { useState } from "react";

const totalSeat = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

export default function Content2(props) {
  return (
    <div className="departure-seat-container">
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
            {props.bookedSeat.map((taken, index) => {
              return (
                <>
                  <button
                    disabled={taken === "BOOKED" ? true : false}
                    className={`seat ${
                      index === props.selectedSeat && "selected"
                    }`}
                    onClick={() => props.setSelectedSeat(index)}
                  ></button>
                  {index === 19 && <div className="seat-devider"></div>}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
