import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import Arrow from "../../assets/arrow.png";
import { Select, DatePicker } from "antd";
import { searchShuttle } from "../../services/auth.service";
import moment from "moment";
import { useDispatch } from "react-redux";
import { searchBus } from "../../services/auth.service";

const dateFormat = "ddd, DD MMM YYYY";

function SearchBar() {
  const [shuttles, setShuttles] = useState([]);
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureTerminal, setDepartureTerminal] = useState("");
  const [arrivalTerminal, setArrivalTerminal] = useState("");
  const [passenger, setPassenger] = useState("");

  const dispatch = useDispatch("");

  useEffect(() => {
    searchShuttle().then((response) => {
      setShuttles(response?.data?.data);
    });
  }, []);

  const onChangeArrivalDate = (date, dateString) => {
    const ArrivalDate = dateString;
    setArrivalDate(ArrivalDate);
  };

  const onChangeDepartureTerminal = (value) => {
    console.log(value);
    setDepartureTerminal(value);
  };

  const onChangeArrivalTerminal = (value) => {
    console.log(value);
    setArrivalTerminal(value);
  };

  const onChangePassenger = (value) => {
    setPassenger(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      departure_shuttle_id: departureTerminal,
      arrival_shuttle_id: arrivalTerminal,
      departure_date: "2021-10-29",
      return_date: "2021-10-25",
      passenger: 1,
      order_type: "RoundTrip",
    };
    searchBus(params).then((response) => {
      console.log(response);
    });
  };
  const { Option } = Select;

  return (
    <form onSubmit={handleSubmit}>
      <div className="button-trip-container">
        <button className="one-way">One Way</button>
        <button className="round-trip">Round Trip</button>
      </div>
      <div className="search-bar-container">
        <div className="search-form-container">
          <div className="form-group form-1">
            <label htmlFor="from">From</label>
            <Select
              onChange={onChangeDepartureTerminal}
              className="form-control input"
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              {shuttles?.map((shuttle) => {
                return (
                  <Option
                    key={shuttle.id}
                    className="search-city-2"
                    value={shuttle.id}
                  >
                    {shuttle.shuttle_name}
                  </Option>
                );
              })}
            </Select>
            {/* <input
              type="text"
              name="search"
              className="form-control input"
              id="from"
              placeholder="Search place"
            /> */}
          </div>
          <div className="arrow">
            <img src={Arrow} alt=""></img>
          </div>
          <div className="form-group form-1">
            <label htmlFor="from">To</label>

            <Select
              onChange={onChangeArrivalTerminal}
              className="form-control input"
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              {shuttles?.map((shuttle) => {
                return (
                  <Option
                    key={shuttle.id}
                    className="search-city-2"
                    value={shuttle.id}
                  >
                    {shuttle.shuttle_name}
                  </Option>
                );
              })}
            </Select>

            {/* <input
              type="text"
              name="search"
              className="form-control input"
              id="from"
              placeholder="Search place"
            /> */}
          </div>
          <div className="form-group form-2">
            <label htmlFor="date">Departure Date</label>
            <DatePicker
              format={dateFormat}
              bordered={false}
              onChange={(date) => setDepartureDate(date)}
              value={departureDate}
            />

            {/* <input
              type="date"
              name="date"
              className="form-control input"
              id="date"
            /> */}
          </div>
          <div className="form-group form-3">
            <label htmlFor="date">Return Date</label>
            <DatePicker
              format={dateFormat}
              bordered={false}
              onChange={(date) => setArrivalDate(date)}
              value={arrivalDate}
            />
          </div>
          <div className="form-group form-4">
            <label htmlFor="passenger">Passenger</label>
            <Select
              onChange={onChangePassenger}
              className="form-control input"
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              <Option className="total-passenger-1" value="1">
                1 Passenger
              </Option>
              <Option className="total-passenger-2" value="2">
                2 Passenger
              </Option>
            </Select>
            {/* <input
              type="text"
              name="passenger"
              className="form-control input"
              id="passenger"
              placeholder="Select passenger"
            /> */}
          </div>

          <button className="search-button">Search</button>
        </div>
        <div className="shadow-search"></div>
      </div>
    </form>
  );
}

export default SearchBar;
