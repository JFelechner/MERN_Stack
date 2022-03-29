
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import StarWarsSearch from './components/StarWarsSearch';
import Results from './components/Results';

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      
          <StarWarsSearch></StarWarsSearch>

      <Switch>

        <Route exact path = "/:category/:id">
          <Results></Results>
        </Route>

      </Switch>

    </div>
      </BrowserRouter>
  );
}

export default App;
