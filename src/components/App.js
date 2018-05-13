import React, { Component } from 'react'
import './App.css'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Add from './Add'
import Edit from './Edit'
import MainPage from './MainPage'


class App extends Component {
  render() {
    return (
      <div>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/edit/:personId" component={Edit} />
          <Redirect to="/" />
      </div>
    );
  }
}

export default App;
