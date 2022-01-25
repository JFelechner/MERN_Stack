
import NewProductForm from './components/NewProductForm';
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
      <h1>Product Manager</h1>
      <Switch>

        <Route exact path="/">
          <NewProductForm></NewProductForm>
        </Route>

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
