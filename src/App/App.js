import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';
import Auth from '../components/pages/Auth/Auth';

import './App.scss';

fbConnection();
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
      {authed
        ? <Auth />
        : ''
      }
    </div>
  );
};

export default App;
