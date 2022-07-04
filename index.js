const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();

const app = express();

app.use(cors());




app.get('/', (req, res) => {
  res.json('hi, I am backend');
});


// API Request - search by a city name to get Air info for the city

app.get('/search', (req, res) => {
  const city = req.query.q;

  console.log('**********************');
  console.log('**********************');
  console.log('**********************');
  console.log('BACK END CITY:', city);
  console.log('**********************');
  console.log('**********************');
  console.log('**********************');

  const options = {
    method: 'GET',
    url: 'https://airvisual1.p.rapidapi.com/v2/auto-complete',
    params: { q: city },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'airvisual1.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
