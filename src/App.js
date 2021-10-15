import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Routes/Home';
import Portfolio from './Routes/Portfolio';
import ContactPage from './Routes/ContactPage';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "Portfolio - Ivy Zhang"
 }, []);
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/projects" exact>
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
