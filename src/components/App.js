import React from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import Add from './Add'
import Edit from './Edit'
import MainPage from './MainPage'


const App = () => 
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/edit/:personId" component={Edit} />
        <Redirect to="/" />
      </Switch>
    </div>
  </BrowserRouter>

export default App;
