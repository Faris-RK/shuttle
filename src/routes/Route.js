import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import SearchBus from "../pages/SearchBus/SearchBusPage";
// import ProfileData from "../components/ProfileAccount/ProfileData";
import Layout from "../components/Layout/Layout.js";
import ProfilePages from "../pages/DataDetails/Index";

function Routes() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/SearchBus" component={SearchBus} />
          <Route exact path="/ProfileData" component={ProfilePages} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default Routes;
