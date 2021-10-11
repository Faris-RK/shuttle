import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import SearchBus from "../pages/SearchBus/SearchBusPage";

function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/" component={SearchBus} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default Routes;
