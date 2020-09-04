import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';
import Auth from '../components/pages/Auth/Auth';
import MyNavbar from '../components/pages/MyNavbar/MyNavbar';
import Home from '../components/pages/Home/Home';
import MyStuff from '../components/pages/MyStuff/MyStuff';
import New from '../components/pages/New/New';
import Edit from '../components/pages/Edit/Edit';
import Stuff from '../components/pages/Stuff/Stuff';

import './App.scss';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const App = () => {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });
    return () => removeListener();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <MyNavbar authed={authed} />
          <div className="container">
            <Switch>
              <PrivateRoute path="/home" component={Home} authed={authed} />
              <PrivateRoute path="/new" component={New} authed={authed} />
              <PrivateRoute path="/myStuff" component={MyStuff} authed={authed} />
              <PrivateRoute path="/edit/:stuffId" component={Edit} authed={authed} />
              <PrivateRoute path="/stuff/:stuffId" component={Stuff} authed={authed} />
              <PublicRoute path="/auth" component={Auth} authed={authed} />
              <Redirect from="*" to="/home" />
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
};

export default App;
