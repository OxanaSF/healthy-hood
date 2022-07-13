import { NutritionsPageStyled as StyleDiv} from '../components/Nutrition/StyledComponents'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'

const Profile = () => {
    const location = useLocation()
    const currentState = useSelector(state => state.favorites.favoritesList)
    const videoList = []

    console.log(location.state === null)
    currentState.map(item => {
        if(item.category == 'video'){
            videoList.push(item.id)
        }
    })
    return (
        <StyleDiv>
            
            <p>Videos:</p>
            {videoList.length > 0 ? 
            videoList.map(item => <Link to="recipe-videos" state={{id: item}}>{item}</Link>) :
            <p>No Videos Saved</p>}
        </StyleDiv>
    );
};

export default Profile;