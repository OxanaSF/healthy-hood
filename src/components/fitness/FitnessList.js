import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FitnessList = (props) => {
  const [img, setImg] = useState("");
  const [results, setResults] = useState();

  let params = useParams();

  const getFitnessInfo = (muscleName) => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: `http://localhost:8000/exercises?bodypart=${params.name}`,
    };
    axios
      .request(options)
      .then((response) => {
        console.log("Body: ", response.data);
        setResults(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    console.log(params.name);
    getFitnessInfo(params.name);
  });

  return (
    <FitnessListStyled>
      {results.map((part, i) => (
        <div key={i}>{part["target"]} </div>
      ))}
      <img src={img} alt="" />
    </FitnessListStyled>
  );
};

const FitnessListStyled = styled.div`
  margin: 10rem auto;
  border: 1px solid black;
  padding: 5rem;
  width: 40%;
  text-align: center;
`;

export default FitnessList;
