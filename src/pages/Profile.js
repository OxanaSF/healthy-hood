import { NutritionsPageStyled as StyleDiv } from '../components/Nutrition/StyledComponents'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'

const Profile = () => {
    const location = useLocation()
    const currentState = useSelector(state => state.favorites.favoritesList)
    const videoList = []
    const recipeList = []
    const cityList = []
    const exerciseList = []
    {console.log(currentState)}
    currentState.map(item => {
        switch (item.category) {
            case 'video':
                videoList.push({id: item.id, title: item.title})
                break;
            case 'recipe':
                recipeList.push({id: item.id, title: item.title})
                break;
            case 'aqi':
                cityList.push({item})
                break;
            case 'exercise':
                exerciseList.push({...item})
                break;
        }
    })
    
    return (
        <StyleDiv>

            <p>Videos:</p>
            {
            videoList.length > 0 ?
                videoList.map(item => <Link to="recipe-videos" state={{ id: item.id }} key={item.id}>{item.title}</Link>) :
                <p>No Videos Saved</p>
            }

            <p>Recipes:</p>
            {
            recipeList.length > 0 ?
                recipeList.map(item => <Link to="search-by-nutrition" state={{ id: item.id }} key={item.id}>{item.title}</Link>) :
                <p>No Recipes Saved</p>
            }
            
            <p>City AQI:</p>
            {
            cityList.length > 0 ?
                cityList.map((item, index) => 
                    <Link 
                        to={`/clean-air/search/${item.title}`} 
                        key={index}
                    >
                        <p>City: {item.id}</p>
                        <p>Date: {item.date}</p>
                        <p>AQI: {item.aqi}</p>
                    </Link>) :
                <p>No Cities Saved</p>
            }
            
            <p>Exercises:</p>
            {
            exerciseList.length > 0 ?
                exerciseList.map(item => <Link to={`/fitness`} key={item.title} state={{ id: item.id }}>{item.title}</Link>) :
                <p>No Exercises Saved</p>
            }
        </StyleDiv>
    );
};

export default Profile;