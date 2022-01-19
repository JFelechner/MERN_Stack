import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Data from './components/Data';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

        <Route exact path = "/">
          <h1>Routing Practice</h1>
          <h4>Create a simple React app that can handle the following routes:</h4>
          <ol>1. localhost:3000/home: This should display the home page, with a generic "Welcome" heading</ol>
          <ol>2. localhost:3000/4: This should display the number "4", or any other number that was sent through</ol>
          <ol>3. localhost:3000/hello: This should display the word "hello" or any other word that was sent through</ol>
          <ol>4. localhost:3000/hello/blue/red: This should display the word "hello" in blue text with a red background. It should work with any other valid word and colors.</ol>
        </Route>

        <Route exact path = "/home">
          <h1>Welcome</h1>
        </Route>

        <Route exact path = "/:id">
          <Data></Data>
        </Route>

        <Route exact path = "/:id/:color/:backgroundColor">
          <Data></Data>
        </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
