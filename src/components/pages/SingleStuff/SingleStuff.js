import React, { useEffect, useState } from 'react';

import stuffData from '../../../helpers/data/stuffData';

const SingleStuff = (props) => {
  const [stuff, setStuff] = useState({});

  useEffect(() => {
    const { stuffId } = props.match.params;
    console.error(stuffId);
    stuffData.getStuffById(stuffId)
      .then((res) => setStuff(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="card bg-dark mt-3 col-6 offset-3">
      <img class="card-img-top" src={stuff.itemImage} alt={stuff.itemDescription} />
      <div className="card-body bg-dark text-light">
        <h3>{stuff.itemName}</h3>
        <ul>{stuff.itemDescription}</ul>
      </div>
    </div>
  );
};

export default SingleStuff;
