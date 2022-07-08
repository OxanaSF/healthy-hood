const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("hi, I am backend");
});

// API Request - search by a city name to get Air info for the city

app.get("/search", (req, res) => {
  const city = req.query.q;

  console.log("**********************");
  console.log("**********************");
  console.log("**********************");
  console.log("BACK END CITY:", city);
  console.log("**********************");
  console.log("**********************");
  console.log("**********************");

  const options = {
    method: "GET",
    url: "https://airvisual1.p.rapidapi.com/v2/auto-complete",
    params: { q: city },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "airvisual1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
      console.log("QUERY!!!!: ", response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/exercises", (req, res) => {
  const muscle = req.query.bodypart;
  console.log("**********************");
  console.log("**********************");
  console.log("**********************");
  console.log("BACK END MUSCLE", muscle);
  console.log("**********************");
  console.log("**********************");
  console.log("**********************");
  const options = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${muscle}`,
    headers: {
      "X-RapidAPI-Key": "a57ecdb4e2msh405c17881f44407p1d957ajsn957f8ba9af49",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  console.log(options.url);

  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
      console.log("CHECK MUSCLE", response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
