
import React from 'react';
import NewAuthorForm from './components/NewAuthorForm';
import AllAuthors from './components/AllAuthors';
import EditAuthorForm from './components/EditAuthorForm';
import {
  BrowserRouter, //tells the application we can enable routing
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App container">
            <h1 className = "ms-4 mt-4">Favorite Authors</h1>

        <Switch>

          <Route exact path="/">
            <AllAuthors></AllAuthors>
          </Route>

          <Route exact path="/author/new">
            <NewAuthorForm></NewAuthorForm>
          </Route>

          <Route exact path = "/author/edit/:id">
            <EditAuthorForm></EditAuthorForm>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;