import bookedIcon from "../../assets/booked-icon.png";
import selectedIcon from "../../assets/selected-icon.png";
import availableIcon from "../../assets/available-icon.png";
import driverIcon from "../../assets/driver-icon.png";
import line2 from "../../assets/line2.png";

  export default function content2 () {
    return(
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
        </div>
    )
  }