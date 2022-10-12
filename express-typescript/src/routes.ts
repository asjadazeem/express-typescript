// import { fetch } from 'node-fetch';
const fetchUrl = require('node-fetch');

module.exports = function (app) {
  app.get('/getActivity', async function (req, res) {
    const response = await fetchUrl('https://www.boredapi.com/api/activity');
    const activity: Activity = await response.json();

    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send(activity);
  });

  //other routes go here ...
};
