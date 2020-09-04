import axios from 'axios';
import apiKeys from '../apiKeys.json';

import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getStuffByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/stuff.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getStuffById = (stuffId) => axios.get(`${baseUrl}/stuff/${stuffId}.json`);

const addStuff = (newJunk) => axios.post(`${baseUrl}/stuff.json`, newJunk);

export default {
  getStuffByUid,
  addStuff,
  getStuffById,
};
