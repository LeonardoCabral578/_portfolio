import "./app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home } from "./pages/home/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* HOME */}
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
