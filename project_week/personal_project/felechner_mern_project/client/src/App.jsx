
import React from 'react';
import Dashboard from './components/Dashboard';
import "./App.css" 
import {
  BrowserRouter, 
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        {/* <h1 className = "ms-4 mt-4">Xbox Live Gamer Profile</h1> */}
        <Switch>

          <Route exact path="/">
            <Dashboard></Dashboard>
          </Route>

          {/* Below is URL to leverage microsoft azur login */}
          {/*  Public URL --> https://xbl.io/app/auth/6d78d895-23e6-4de4-afa4-6dd76a8bf367  */}
          {/* <Route exact path="/auth/grant">
            <Dashboard></Dashboard>
          </Route>  */}

        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
