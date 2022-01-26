
import NewProductForm from './components/NewProductForm';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
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
        <Switch>

          <Route exact path="/">
            <h1>Product Manager</h1>
            <NewProductForm></NewProductForm>
            <hr />
            <AllProducts></AllProducts>
          </Route>

          <Route exact path="/products/:id">
            <OneProduct></OneProduct>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
