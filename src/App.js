import React from 'react';
import './App.css';
import RegistComponents from "./SiteComponent/RegistComponent.js"
import Login from "./SiteComponent/Login.js";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom"


class App extends React.Component{
  render() {
    return (
        <Router>
          <div className="App">
            <Route exact={true} path='/' component={RegistComponents} />
          </div>
          <Route exact={true}  path='/login' component={Login}/>
          <Route exact={true}  path='/main' component={RegistComponents}/>
        </Router>
    );

  }
}

export default App;
