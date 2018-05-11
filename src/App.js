import React, { Component } from 'react'
import './App.css'
import {
  Route,
  Link,
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
        <Link to={'/add'}>Add new person</Link>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/edit/:personId" component={Edit} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
