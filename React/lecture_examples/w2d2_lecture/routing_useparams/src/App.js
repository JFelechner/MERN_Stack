
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Info from './components/Info';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path = "/">
            <h1>Welcome to the home page</h1>
          </Route>
          <Route exact path = "/profile/:id">
            <Info></Info>
          </Route>
          <Route exact path = "/profile/:id/:borderStyle/:fontsize">
            <Info></Info>
          </Route>
        </Switch>
      </div>
    
    </BrowserRouter>
  );
}

export default App;