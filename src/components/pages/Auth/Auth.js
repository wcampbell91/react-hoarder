import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const Auth = () => {
  const loginClickEvent = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(googleProvider);
  };

  return (
    <div className="Auth mt-2">
      <button className="btn btn-danger" onClick={loginClickEvent}><i className="fab fa-googl fa-lg mr-2"></i>Google Log In</button>
    </div>
  );
};

export default Auth;
