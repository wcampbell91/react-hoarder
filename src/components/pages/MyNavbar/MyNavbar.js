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
      <div>
        <nav className="navbar navbar-light ml-auto">
          <ul className="nav-item text-left">
            <NavLink className="text-light" tag={NavLink} to="/home">Home</NavLink>
          </ul>
          <ul className="nav-item text-left">
            <NavLink className="text-light" tag={NavLink} to="/mystuff">My Stuff</NavLink>
          </ul>
          <ul className="nav-item">
            <NavLink className="text-light" tag={NavLink} to="/new">New</NavLink>
          </ul>
          <ul className="nav-item">
            <button className="btn btn-warning" onClick={logMeOut}>Logout</button>
          </ul>
        </nav>
      </div>
      );
    }
  };
  return (
    <div>
      <nav>
      <a class="navbar-brand" href="/">Hoarder</a>
        <button class="navbar-toggler" type="button" onClick={toggle}>
          <span class="navbar-toggler-icon"></span>
        </button>

      </nav>
    </div>
  );
};

export default MyNavbar;
