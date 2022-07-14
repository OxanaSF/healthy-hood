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
        cityList.push({ title: item.title });
        break;
      case 'exercise':
        exerciseList.push({ ...item });
        break;
    }
  });

  return (
    <ProfileStyled>
      {/* <section className="info">
        <div class="row">
          <div class="card">
            <h2>Videos:</h2>
            {videoList.length > 0 ? (
              videoList.map((item) => (
                <Link to="recipe-videos" state={{ id: item.id }} key={item.id}>
                  {item.title}
                </Link>
              ))
            ) : (
              <p>No Videos Saved</p>
            )}
          </div>

          <div class="card">
            <h2>Recipes:</h2>
            {recipeList.length > 0 ? (
              recipeList.map((item) => (
                <Link
                  to="search-by-nutrition"
                  state={{ id: item.id }}
                  key={item.id}
                >
                  {item.title}
                </Link>
              ))
            ) : (
              <p>No Recipes Saved</p>
            )}
          </div>

          <div class="card">
            <h2>City AQI:</h2>
            {cityList.length > 0 ? (
              cityList.map((item) => (
                <Link to={`/clean-air/search/${item.title}`} key={item.title}>
                  {item.title}
                </Link>
              ))
            ) : (
              <p>No Cities Saved</p>
            )}
          </div>

          <div class="card">
            <h2>Exercises:</h2>
            {exerciseList.length > 0 ? (
              exerciseList.map((item) => (
                <Link to={`/fitness`} key={item.title} state={{ id: item.id }}>
                  {item.title}
                </Link>
              ))
            ) : (
              <p>No Exercises Saved</p>
            )}
          </div>
        </div>
      </section> */}




      <div class="first hero">
        <img
          class="hero-profile-img"
          src="https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg"
          alt=""
        />
        <div class="hero-description-bk"></div>
        <div class="hero-logo">
          <img src="" alt="" />
        </div>
        <div class="hero-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="hero-date">
          <p>20.02.2019</p>
        </div>
        <div class="hero-btn">
          <a href="#">Learn More</a>
        </div>
      </div>
     


      <div class="first hero">
        <img
          class="hero-profile-img"
          src="https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg"
          alt=""
        />
        <div class="hero-description-bk"></div>
        <div class="hero-logo">
          <img src="" alt="" />
        </div>
        <div class="hero-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="hero-date">
          <p>20.02.2019</p>
        </div>
        <div class="hero-btn">
          <a href="#">Learn More</a>
        </div>
      </div>
   



      <div class="first hero">
        <img
          class="hero-profile-img"
          src="https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg"
          alt=""
        />
        <div class="hero-description-bk"></div>
        <div class="hero-logo">
          <img src="" alt="" />
        </div>
        <div class="hero-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="hero-date">
          <p>20.02.2019</p>
        </div>
        <div class="hero-btn">
          <a href="#">Learn More</a>
        </div>
      </div>
    



      <div class="first hero">
        <img
          class="hero-profile-img"
          src="https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg"
          alt=""
        />
        <div class="hero-description-bk"></div>
        <div class="hero-logo">
          <img src="" alt="" />
        </div>
        <div class="hero-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="hero-date">
          <p>20.02.2019</p>
        </div>
        <div class="hero-btn">
          <a href="#">Learn More</a>
        </div>
      </div>

    </ProfileStyled>
  );
};

const ProfileStyled = styled.div`
margin: 10rem;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 5rem;


 .hero {
  display: inline-block;
  position: relative;
  width: 400px;
  min-width: 400px;
  height: 400px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
  /* margin: 30px; */
}

.hero-profile-img {
  height: 70%;
}

.hero-description-bk {
  background-image: linear-gradient(0deg, #3f5efb, #fc466b);
  border-radius: 30px;
  position: absolute;
  top: 55%;
  left: -5px;
  height: 65%;
  width: 108%;
  transform: skew(19deg, -9deg);
}

.second .hero-description-bk {
  background-image: linear-gradient(-20deg, #bb7413, #e7d25c);
}

.hero-logo {
  height: 80px;
  width: 80px;
  border-radius: 20px;
  background-color: #fff;
  position: absolute;
  bottom: 30%;
  left: 30px;
  overflow: hidden;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.7);
}

.hero-logo img {
  height: 100%;
}

.hero-description {
  position: absolute;
  color: #fff;
  font-weight: 900;
  left: 150px;
  bottom: 26%;
}

.hero-btn {
  position: absolute;
  color: #fff;
  right: 30px;
  bottom: 10%;
  padding: 10px 20px;
  border: 1px solid #fff;
}

.hero-btn a {
  color: #fff;
}

.hero-date {
  position: absolute;
  color: #fff;
  left: 30px;
  bottom: 10%;
}
/* END CARD DESIGN */

/* body {
  font-family: "Open Sans", sans-serif;
  margin: 0;
  background-color: #eee;
  min-height: 100vh;
} */
/* .btn i:before {
  width: 14px;
  height: 14px;
  position: fixed;
  color: #fff;
  background: #0077b5;
  padding: 10px;
  border-radius: 50%;
  top: 5px;
  right: 5px;
} */

`;

export default Profile;
