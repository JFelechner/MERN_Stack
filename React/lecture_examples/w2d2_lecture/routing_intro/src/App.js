import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Link, //Link is like an anchor tag but it wont reload the whole page when it takes you to a new route
  Switch, //Lets you tell the application which routes we can switch in and out of
  Route //Route tag allows you to specify a specific route for a component to show up in
} from "react-router-dom";
import Profile from './components/Profile';
import Group from './components/Group';

function App() {
  return (
    <BrowserRouter> {/* BrowserRouter is just to tell the app that we have routing enabled. It needs to be the main parent in the App component's return*/}
      <div className="App">
        <Link className = "btn btn-success" to= "/">Go Home</Link> ||
        <Link className = "btn btn-info" to="/profile">Go to my profile</Link> || 
        <Link className = "btn btn-primary" to="/groups">Go to Groups page</Link> 
        <Switch> {/* inside of the Switch tags, we can indicate the routes and the components to render at those routes. Anything outside of the Switch tags will render in ALLLL the routes. Anythign inside of Switch tags will only render at specific routes */}
          <Route path = "/profile">
            <Profile></Profile>
          </Route>
          <Route path = "/groups">
            <Group></Group>
          </Route>
          <Route path = "/">
            <h1>Welcome to BookFace</h1>
            <p>This page is property of BookFace and we are collecting your data</p>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;