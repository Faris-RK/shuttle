import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import SearchBus from "../pages/SearchBus/SearchBusPage";
import Layout from "../components/Layout/Layout.js";
import MyBookingExact from "../pages/MyBooking/MyBookingExact";

function Routes() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/SearchBus" component={SearchBus} />
          <Route path="/MyBookingExact" component={MyBookingExact} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default Routes;
