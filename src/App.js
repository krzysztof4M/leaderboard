import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Add from './Add';
import Edit from './Edit';
import List from './List';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/edit/:personId" component={Edit} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
