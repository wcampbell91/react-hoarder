import React from 'react';

const StuffCards = (props) => {
  const { oneStuff } = props;

  return (
    <div className="card">
      <div className="card-body bg-dark text-light">
        <h3>{oneStuff.itemName}</h3>
      </div>
    </div>
  );
};

export default StuffCards;
