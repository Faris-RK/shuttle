import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import Arrow from "../../assets/arrow.png";
import { Select, DatePicker } from "antd";
import { searchShuttle } from "../../services/auth.service";
import { searchBus } from "../../services/auth.service";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const dateFormat = "ddd, DD MMM YYYY";

function SearchBar() {
  const [shuttles, setShuttles] = useState([]);
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureTerminal, setDepartureTerminal] = useState("");
  const [arrivalTerminal, setArrivalTerminal] = useState("");
  const [passenger, setPassenger] = useState("");
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    searchShuttle().then((response) => {
      setShuttles(response?.data?.data);
    });
    if (location && location.state && location.state.data) {
      console.log(location.state.data, "location state data");
      let locationInput = location.state.data;
      setDepartureTerminal(locationInput.inputDepartureTerminal);
      setArrivalTerminal(locationInput.inputArrivalTerminal);
      let momentDeparture = moment(
        locationInput.inputDepartureDate,
        "YYYY-MM-DD"
      );
      setDepartureDate(momentDeparture);

      let momentArrival = moment(locationInput.inputArrivalDate, "YYYY-MM-DD");
      setArrivalDate(momentArrival);

      setPassenger(locationInput.inputPassanger);
      console.log(locationInput.inputArrivalTerminal, "ini arrival input");
      console.log(locationInput.inputPassanger, "ini input Passanger");
    }
  }, []);
  console.log(arrivalTerminal, "ini arrivalTerminal");
  console.log(departureDate, "ini departureDate");

  const onChangeDepartureTerminal = (value) => {
    console.log(value);
    setDepartureTerminal(value);
  };

  const onChangeArrivalTerminal = (value) => {
    console.log(value, "ini value onchange terminal");
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
      departure_date: departureDate ? departureDate.format("YYYY-MM-DD") : "",
      return_date: arrivalDate ? arrivalDate.format("YYYY-MM-DD") : "",
      passenger: 1,
      order_type: "RoundTrip",

      inputDepartureTerminal: departureTerminal,
      inputArrivalTerminal: arrivalTerminal,
      inputDepartureDate: departureDate
        ? departureDate.format("YYYY-MM-DD")
        : "",
      inputArrivalDate: arrivalDate ? arrivalDate.format("YYYY-MM-DD") : "",
      inputPassanger: passenger,
    };

    history.push({
      pathname: "/SearchBus",
      // search: '?update=true',  // query string
      state: {
        // location state
        data: params,
      },
    });
    // dispatch(saveSearchParams())

    // simpan data dari variable params ke redux
    // redirect ke halaman search
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
              value={departureTerminal}
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
          </div>
          <div className="arrow">
            <img src={Arrow} alt=""></img>
          </div>
          <div className="form-group form-1">
            <label htmlFor="from">To</label>

            <Select
              onChange={onChangeArrivalTerminal}
              className="form-control input"
              value={arrivalTerminal}
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
          </div>
          <div className="form-group form-2">
            <label htmlFor="date">Departure Date</label>
            <DatePicker
              format={dateFormat}
              bordered={false}
              onChange={(date) => setDepartureDate(date)}
              value={departureDate}
            />
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
              showSearch
              value={passenger}
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
          </div>

          <button className="search-button">Search</button>
        </div>
        <div className="shadow-search"></div>
      </div>
    </form>
  );
}

export default SearchBar;
