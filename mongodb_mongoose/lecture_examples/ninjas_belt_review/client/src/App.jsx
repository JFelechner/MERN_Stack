import NewNinjaForm from './components/NewNinjaForm';
import AllNinjas from './components/AllNinjas'
import OneNinja from './components/OneNinja';
import {
  BrowserRouter, //tells the application we can enable routing
  Switch,
  Route,
  Link 
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>

    <div className="App container">
      <h1>Ninjas Belt Review</h1>
      <Switch>

        <Route exact path = "/">
      <NewNinjaForm></NewNinjaForm>
      <hr />
      <AllNinjas></AllNinjas>
        </Route>

        <Route exact path = "/ninjas/:id">
            <OneNinja></OneNinja>
          </Route>

      </Switch>
    </div>

    </BrowserRouter>
  );
}

export default App;
