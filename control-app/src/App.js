import Dashboard from './components/Dashboard';
import Topbar from './components/Topbar';
import Navigation from './components/Navigation';
import Todo from './components/Todo/Todo.js';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar/>
        <div className="page">
          <Switch>

            <Route exact path="/">
              <Dashboard/> 
            </Route>

            <Route exact path="/todo">
              <Todo/>
            </Route>

            <Route exact path="/nav">
              <Navigation/>
            </Route>
          </Switch>          
        </div>
      </Router>
    </div>
  );
}

export default App;
