import styled from "styled-components";
// import FitnessList from "../components/FitnessList";

import { Link, Outlet } from "react-router-dom";

const FitnessPage = () => {
  return (
    <FitnessPageStyled>
      <h2>This is a Fitness Page that is going to be created by Johnson!</h2>
      <div className="fitness-page-main">
        <nav className="fitness-page-nav">
          <Link to="/fitness/exercises"> Search </Link>
        </nav>
        <Outlet />
      </div>
    </FitnessPageStyled>
  );
};

const FitnessPageStyled = styled.section`
  min-height: 70vh;
  h2 {
    margin-top: 5rem;
    text-align: center;
    font-size: 2rem;
  }
`;

export default FitnessPage;
