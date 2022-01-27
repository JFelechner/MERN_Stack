
import React, {useState} from 'react';
import NewProductForm from './components/NewProductForm';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
import EditProductForm from './components/EditProductForm';
import {
  BrowserRouter, //tells the application we can enable routing
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let [newProductAdded, setNewProductAdded] = useState(false)

  return (
    <BrowserRouter>
      <div className="App container">
        <Switch>

          <Route exact path="/">
            <h1>Product Manager</h1>
            <NewProductForm newProductAdded={newProductAdded} setNewProductAdded= {setNewProductAdded} ></NewProductForm>
            <hr />
            <AllProducts newProductAdded={newProductAdded}></AllProducts>
          </Route>

          <Route exact path="/products/:id">
            <OneProduct></OneProduct>
          </Route>

          <Route exact path = "/products/:id/edit">
            <EditProductForm></EditProductForm>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
