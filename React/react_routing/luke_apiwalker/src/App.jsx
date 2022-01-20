
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
    <div className="App">
      <BrowserRouter>

          <StarWarsSearch></StarWarsSearch>

      <Switch>

        <Route exact path = "/:textId/:indexId">
          <Results></Results>
        </Route>

      </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
