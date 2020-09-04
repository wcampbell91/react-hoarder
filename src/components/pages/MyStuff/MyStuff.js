import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line arrow-body-style
const MyStuff = (props) => {
  const editEvent = (e) => {
    e.preventDefault();
    props.history.push('/edit/12345');
  };

  const singleViewEvent = (e) => {
    e.preventDefault();
    props.history.push('/stuff/12345');
  };

  return (
    <div>
      <h1>My Stuff!</h1>
      <button className="btn btn-warning mr-3" onClick={editEvent}>Edit</button>
      <button className="btn btn-warning" onClick={singleViewEvent}>Single</button>
    </div>
  );
};

export default MyStuff;
