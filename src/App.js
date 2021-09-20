import React, {useState} from 'react';
import axios from 'axios'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Profile from './component/Profile'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './component/PrivateRoute';

function App() {

  return (
    <div className="App">
      <header>
        <h1>MindTree</h1>
      </header>
      <main>
        <BrowserRouter>
          <div className="content">
            <Switch>
              {/* <Route exact path="/" component={Dashboard}/> */}
              <Route exact path="/login" component={Login}/>
              <Route exact path="/profile" component={Profile}/>
              <PrivateRoute component={Dashboard} path="/" exact />
            </Switch>
          </div>
        </BrowserRouter>
        {/* <Login /> */}
        {/* <Search handleInput={handleInput} search={search} />
        <Results results={state.result} openPopup={openPopup} />
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false} */}
      </main>
    </div>
  );
}

export default App;
