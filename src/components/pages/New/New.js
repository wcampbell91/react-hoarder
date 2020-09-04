import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import authData from '../../../helpers/data/authData';
import stuffData from '../../../helpers/data/stuffData';

const New = () => {
  const [itemName, setItemName] = useState('');
  const [itemImage, setItemImage] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const history = useHistory();

  const setNameEvent = (e) => {
    e.preventDefault();
    setItemName(e.target.value);
  };

  const setImageEvent = (e) => {
    e.preventDefault();
    setItemImage(e.target.value);
  };

  const setDescriptionEvent = (e) => {
    e.preventDefault();
    setItemDescription(e.target.value);
  };

  const createJunkEvent = (e) => {
    e.preventDefault();
    const newJunk = {
      itemName,
      itemImage,
      itemDescription,
      uid: authData.getUid(),
    };

    stuffData.addStuff(newJunk)
      .then((res) => {
        console.error('add stuff worked', res);
        history.push('/stuff');
      })
      .catch((err) => console.error('add junk broke', err));
  };

  return (
    <div>
      <h1>Add Some Junk</h1>
      <form>
        <div class="form-group">
          <label htmlFor="itemName">Item Name</label>
          <input
          type="text"
          class="form-control"
          id="itemName"
          value={itemName}
          placeholder="Enter Item Name"
          onChange={setNameEvent}
          />
        </div>
        <div class="form-group">
          <label htmlFor="itemImage">Item Image</label>
          <input
          type="text"
          class="form-control"
          id="itemImage"
          value={itemImage}
          placeholder="Enter Item Image"
          onChange={setImageEvent}
          />
        </div>
        <div class="form-group">
          <label htmlFor="itemDescription">Item Decription</label>
          <input
          type="text"
          class="form-control"
          id="itemDescription"
          value={itemDescription}
          placeholder="Enter Item Description"
          onChange={setDescriptionEvent}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={createJunkEvent}>Submit</button>
      </form>
    </div>
  );
};

export default New;
