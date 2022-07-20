// import { NutritionsPageStyled as StyleDiv } from '../components/Nutrition/StyledComponents';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import ExerciseList from '../components/FitnessSection/ExerciseList';
import styled from 'styled-components';

const Profile = () => {
  const location = useLocation();
  const currentState = useSelector((state) => state.favorites.favoritesList);
  const videoList = [];
  const recipeList = [];
  const cityList = [];
  const exerciseList = [];
  {
    console.log(currentState);
  }
  currentState.map((item) => {
    switch (item.category) {
      case 'video':
        videoList.push({ id: item.id, title: item.title });
        break;
      case 'recipe':
        recipeList.push({ id: item.id, title: item.title });
        break;
      case 'aqi':
        cityList.push({ title: item.id, date: item.date, aqi: item.aqi });
        break;
      case 'exercise':
        exerciseList.push({ ...item });
        break;
    }
  });

  const getTodayDate = () => {};
  console.log(cityList)
  return (
    <ProfileStyled>
      <div className="container">
        <div className="title">
          <h1 className="profile-date">
            {new Date().toISOString().slice(0, 10)}
          </h1>
          <h1 className="profile-welcome">Welcome to Your Profile!</h1>
        </div>

        <div className="cards-wrapper">
          <div className="card">
            <h2>Videos:</h2>
            {videoList.length > 0 ? (
              videoList.map((item) => (
                <Link
                  to="../nutrition/recipe-videos"
                  state={{ id: item.id }}
                  key={item.id}
                  className="response"
                >
                  {item.title}
                </Link>
              ))
            ) : (
              <p>No Videos Saved</p>
            )}
          </div>

          <div className="card">
            <h2>Recipes:</h2>
            {recipeList.length > 0 ? (
              recipeList.map((item) => (
                <Link
                  to="../nutrition/search-by-nutrition"
                  state={{ id: item.id }}
                  key={item.id}
                  className="response"
                >
                  {item.title}
                </Link>
              ))
            ) : (
              <p>No Recipes Saved</p>
            )}
          </div>
          <div className="card">
            <h2>City AQI:</h2>
            {cityList.length > 0 ? (
              cityList.map((item) => (
                <Link
                  to={`/clean-air/search/${item.title}`}
                  key={item.title}
                  className="response"
                >
                  <p>City:{item.title}</p>
                  <p>Date:{item.date}</p>
                  <p>AQI:{item.aqi}</p>
                </Link>
              ))
            ) : (
              <p>No Cities Saved</p>
            )}
          </div>
          <div className="card">
            <h2>Exercises:</h2>
            {exerciseList.length > 0 ? (
              exerciseList.map((item) => (
                <Link
                  to={`/fitness`}
                  key={item.title}
                  state={{ id: item.id }}
                  className="response"
                >
                  {item.title}
                </Link>
              ))
            ) : (
              <p>No Exercises Saved</p>
            )}
          </div>
        </div>
      </div>
    </ProfileStyled>
  );
};

const ProfileStyled = styled.div`

  .container {
    width: 90%;
    min-height: 100vh;
    margin: 0 auto;
    padding-bottom: 60px;
  }

  .title {
    margin-bottom: 5%;
 

    .profile-date {
      color: #9996b3;
      font-size: 1.8rem;
    }

    .profile-welcome {
      color: #9996b3;
    }
  }

  h1 {
    font-weight: 300;
    font-size: 2em;
    text-align: left;
    line-height: 1.3;
    padding: 40px 20px 0 20px;
    color: red;
  }
  p {
    text-align: left;
    opacity: 0.8;
    a {
      color: white;
      text-decoration: none;
      border-bottom: 1px solid white;
      transition: border 0.3s;
    }
    a:hover {
      border-bottom: 1px solid rgba(255, 255, 255, 0);
    }
  }

  .cards-wrapper {
    width: 100%;
    min-height: 30rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  .card {
    
    width: 23%;
    margin: 1%;
    background: white;
    color: black;
    border-radius: 5px;
    padding: 40px;
    transition: 0.3s all;
    box-shadow: 0 2px 5px 0 rgba(3, 6, 26, 0.15);
    border-radius: 2rem;
    color: lightblue;
    font-weight: 600;
    font-size: 1.3rem;
 

    h2 {
      color: #9996b3;
      font-size: 2rem;
      font-weight: 600;
    }

    @media screen and (max-width: 1240px) {
      width: 48%;
    }
    @media screen and (max-width: 930px) {
   
      width: 100%;
      margin: 2% auto;


      
  }
    


    &:hover {
      box-shadow: 0px 0px 40px -10px rgba(0, 0, 0, 0.5);
      transform: scale(1.05);
    }
    p {
      text-align: left;
    }
  
  }


`;

export default Profile;
