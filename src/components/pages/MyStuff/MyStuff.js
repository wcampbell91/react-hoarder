import React, { useState, useEffect } from 'react';

import stuffData from '../../../helpers/data/stuffData';
import authData from '../../../helpers/data/authData';
import StuffCards from '../../shared/StuffCards/StuffCards';
// eslint-disable-next-line arrow-body-style
const MyStuff = (props) => {
  const [stuff, setStuff] = useState([]);

  const getStuff = () => {
    stuffData.getStuffByUid(authData.getUid())
      .then((res) => setStuff(res))
      .catch((err) => console.error(err));
  };

  useEffect(getStuff, []);

  const stuffCards = stuff.map((oneStuff) => <StuffCards key={oneStuff.itemName} oneStuff={oneStuff} />);
  const editEvent = (e) => {
    e.preventDefault();
    props.history.push('/edit/12345');
  };

  const singleViewEvent = (e) => {
    e.preventDefault();
    props.history.push('/single/12345');
  };

  return (
    <div>
      <h1>My Stinky Rotten Stuff</h1>
      <button className="btn btn-warning mr-3" onClick={editEvent}>Edit</button>
      <button className="btn btn-warning" onClick={singleViewEvent}>Single</button>
      <div className="card-columns mt-4">
      {stuffCards}
      </div>
    </div>
  );
};

export default MyStuff;
