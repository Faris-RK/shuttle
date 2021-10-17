import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import SearchBus from "../pages/SearchBus/SearchBusPage";
import ProfileData from "../components/ProfileAccount/ProfileData";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/SearchBus" component={SearchBus} />
        <Route exact path="/ProfileData" component={ProfileData} />
      </Switch>
    </Router>
  );
}

export default Routes;
