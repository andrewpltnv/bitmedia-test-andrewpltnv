import React from 'react';
import {
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import './App.scss';
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import UserPage from "./components/Users/UserPage";

function App(props) {
  const { history } = props;


  return (
    <div className="App">
      <Switch>
        <Route history={history} path='/home' component={Home}/>
        <Route history={history} path='/users' component={Users}/>
        <Route history={history} path='/user' component={UserPage}/>
        <Route history={history} path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
