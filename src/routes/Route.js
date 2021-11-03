import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import SearchBus from "../pages/SearchBus/SearchBusPage";
import Layout from "../components/Layout/Layout.js";
import MyBookingExact from "../pages/MyBooking/MyBookingExact";
import Navigation from "../pages/BusVendorPage/Navigation";
function Routes() {
  return (
    <Router>
      {/* <Layout> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/SearchBus" component={SearchBus} />
        <Route path="/MyBookingExact" component={MyBookingExact} />
        <Route path="/Navigation" component={Navigation} />
      </Switch>
      {/* </Layout> */}
    </Router>
  );
}

export default Routes;
