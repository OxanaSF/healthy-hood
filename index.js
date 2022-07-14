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

  // console.log("**********************");
  // console.log("**********************");
  // console.log("**********************");
  // console.log("BACK END CITY:", city);
  // console.log("**********************");
  // console.log("**********************");
  // console.log("**********************");

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


// API Request - get a random gratitude question

app.get("/question", (req, res) => {


  const options = {
    method: 'GET',
    url: 'https://gratitude-questions.p.rapidapi.com/question',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'gratitude-questions.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.json(response.data.question);
      
    })
    .catch(function (error) {
      console.error(error);
    });
});


// API Request - get articles about mental health

app.get("/news", (req, res) => {


  const options = {
    method: 'GET',
    url: 'https://gratitude-questions.p.rapidapi.com/news',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'mental-health-info-api.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
      // console.log('***************');
      // console.log('***************');
      // console.log('***************');
      // console.log('***************');
      // console.log('RESPONSE DATA', response.data);
      // console.log('***************');
      // console.log('***************');
      // console.log('***************');
      // console.log('***************');
      
    })
    .catch(function (error) {
      console.error(error);
    });
});




// $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
//     type: 'POST',
//     data: JSON.stringify(data),
//     contentType: 'application/json'
// }).done(function() {
//     alert('Your mail is sent!');
// }).fail(function(error) {
//     alert('Oops... ' + JSON.stringify(error));
// });



// })


// console.log('***************');
//       console.log('***************');
//       console.log('***************');
//       console.log('***************');
//       console.log('RESPONSE DATA', response.data.question);
//       console.log('***************');
//       console.log('***************');
//       console.log('***************');
//       console.log('***************');


// app.get("/exercises", (req, res) => {
//   const muscle = req.query.bodypart;
//   console.log("**********************");
//   console.log("**********************");
//   console.log("**********************");
//   console.log("BACK END MUSCLE", muscle);
//   console.log("**********************");
//   console.log("**********************");
//   console.log("**********************");
//   const options = {
//     method: "GET",
//     url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${muscle}`,

//     headers: {
//       "X-RapidAPI-Key": process.env.REACT_APP_API_KEY_2,
//       "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//     },
//   };
//   console.log(options.url);

//   axios
//     .request(options)
//     .then(function (response) {
//       res.json(response.data);
//       console.log("CHECK MUSCLE", response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// });

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
