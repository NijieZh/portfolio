import './App.css';
import './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Home from './Routes/Home';
import Portfolio from './Routes/Portfolio';
import ContactPage from './Routes/ContactPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/portfolio" exact>
          <Portfolio/>
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      
  );
}

export default App;
