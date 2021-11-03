import {  Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import SearchBus from "../pages/SearchBus/SearchBusPage";
import Layout from "../components/Layout/Layout.js";
import MyBookingExact from "../pages/MyBooking/MyBookingExact";
import { history } from "../helpers/history";
import PassengersDetail from "../pages/PassengerDetail/PassengerDetail";

function Routes() {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/SearchBus" component={SearchBus} />
          <Route path="/MyBookingExact" component={MyBookingExact} />
          <Route path="/PassengerDetail" component={PassengersDetail} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default Routes;
