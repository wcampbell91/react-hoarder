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

  const buildNavbar = () => {
    if (authed) {
      return (
        <nav className="ml-auto">
          <NavLink className="text-dark mr-3" tag={NavLink} to="/home">Home</NavLink>
          <NavLink className="text-dark mr-3" tag={NavLink} to="/mystuff">My Stuff</NavLink>
          <NavLink className="text-dark mr-3" tag={NavLink} to="/new">New</NavLink>
          <button className="btn btn-warning" onClick={logMeOut}>Logout</button>
        </nav>
      );
    }
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink class="navbar-brand" to="/">Hoarder</NavLink>
      <button class="navbar-toggler" type="button" onClick={toggle}>
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" isOpen={isOpen}>
          {buildNavbar()}
      </div>
    </nav>
  );
};

export default MyNavbar;
