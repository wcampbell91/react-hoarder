import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/auth';

const MyNavbar = (props) => {
  const { authed } = props;

  const [isOpen, setIsOpen] = useState(false);

  const logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  const toggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  // eslint-disable-next-line consistent-return
  const buildNavbar = () => {
    if (authed) {
      return (
        <nav className="ml-auto">
          <NavLink className="text-dark mr-3" tag={NavLink} to="/home">Home</NavLink>
          <NavLink className="text-dark mr-3" tag={NavLink} to="/stuff">My Stuff</NavLink>
          <NavLink className="text-dark mr-3" tag={NavLink} to="/stuffName/new">New</NavLink>
          <button className="btn btn-warning" onClick={logMeOut}>Logout</button>
        </nav>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">Hoarder</NavLink>
      <button className="navbar-toggler" type="button" onClick={toggle}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
          {buildNavbar()}
      </div>
    </nav>
  );
};

export default MyNavbar;
