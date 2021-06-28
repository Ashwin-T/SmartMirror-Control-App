import Dashboard from './components/Dashboard';
import Topbar from './components/Topbar';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar/>
        <Switch>

          <Route exact path="/">
            <Dashboard/> 
          </Route>

          <Route exact path="/todo">
            {/* <Todo/> */}
          </Route>

          <Route exact path="/nav">
            <Navigation/>
          </Route>

          <Route exact path="/alarm">
            {/* <Todo/> */}
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
