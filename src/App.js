import React from 'react';
import './App.css';
import RegistComponents from "./SiteComponent/RegistComponent.js"
import Login from "./SiteComponent/Login.js";
import {BrowserRouter as Router, Route} from "react-router-dom"


class App extends React.Component{
  render() {
    return (
        <Router>
          <div className="App">
              <Route exact={true}  path='/' component={RegistComponents}/>
          </div>
          <Route exact={true}  path='/login' component={Login}/>
        </Router>
    );

  }
}

export default App;
