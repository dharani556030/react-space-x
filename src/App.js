import React from 'react';
import Header from './Components/Header/Header';
import LaunchList from './Components/LaunchList/LaunchList';
import LaunchView from './Components/LaunchView/LaunchView';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './styles.css';
function App() {
  return (
    <div className="App">
    <Header />
    <Router>
    <Switch>
      <Route path="/launch/:flight_number">
          <LaunchView />
        </Route>
        <Route path="/">
            <LaunchList />
        </Route>
        
         
    </Switch>
    </Router>
    </div>
  );
}

export default App;
