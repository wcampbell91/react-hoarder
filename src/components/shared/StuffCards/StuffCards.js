import React from 'react';
import { Link } from 'react-router-dom';

const StuffCards = (props) => {
  const { oneStuff } = props;

  const singleStuffLink = `/single/${oneStuff.id}`;

  return (
    <div className="card">
      <div className="card-body bg-dark text-light">
        <h3>{oneStuff.itemName}</h3>
        <Link to={singleStuffLink} className="btn btn-light"><i className="far fa-lg fa-eye"></i></Link>
      </div>
    </div>
  );
};

export default StuffCards;
