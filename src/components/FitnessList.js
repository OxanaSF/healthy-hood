import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FitnessList = (props) => {
  const [muscle, setMuscle] = useState([]);
  const [img, setImg] = useState("");

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
        setMuscle(response.data);
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
      {muscle.map((part) => (
        <div>{part["target"]} </div>
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
