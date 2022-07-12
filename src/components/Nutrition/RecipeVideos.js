import axios from "axios"
import { useState } from 'react'
import ClockLoader from 'react-spinners/ClockLoader';
import { ResultItem, StyledButton, VideoPlayerContainer, ResultsArea, NutritionsPageStyled, FormStyled } from './StyledComponents'
import { FaSearch } from 'react-icons/fa';



import { useDispatch, useSelector } from "react-redux"
import { favoritesActions } from "../../store/store"
  




const DUMMY_DATA = [{
    title: "how to make chicken soup - dinner recipes - homemade from scratch - stock recipes -",
    youTubeId: "2h0bhpqFKpM",
    rating: 1,
    views: 379,
    thumbnail: "https://i.ytimg.com/vi/2h0bhpqFKpM/mqdefault.jpg",
    length: 476
},
{
    title: "how to make chicken soup - dinner recipes - homemade from scratch - stock recipes -",
    youTubeId: "dfaj4vI8QxE",
    rating: 1,
    views: 379,
    thumbnail: "https://i.ytimg.com/vi/2h0bhpqFKpM/mqdefault.jpg",
    length: 476
},
{
    title: "how to make chicken soup - dinner recipes - homemade from scratch - stock recipes -",
    youTubeId: "wdvruTuWvW8",
    rating: 1,
    views: 379,
    thumbnail: "https://i.ytimg.com/vi/2h0bhpqFKpM/mqdefault.jpg",
    length: 476
}]



const RecipeVideos = () => {

    const [searchValue, setSearchValue] = useState('')
    const [results, setResults] = useState(DUMMY_DATA)
    const [showVideo, setShowVideo] = useState(false)
    const [videoId, setVideoId] = useState('')

    const [loading, setLoading] = useState(false)

    const currentState = useSelector(state => state.favoritesList)
    const dispatch = useDispatch()
  const addItem = (e) => {
    dispatch(favoritesActions.addToFavorites())
  }

{console.log(currentState)}


    const getVideos = (value) => {

        const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/videos/search',
            params: {
                query: value,
                minLength: '0',
                maxLength: '999',
                number: '15',
                offset: '0'
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_3,
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };


        axios.request(options).then(function (response) {
            console.log(response.data);
            console.log(response.data.videos)
            setLoading(false)
            setResults(response.data.videos)
            setSearchValue('')
        }).catch(function (error) {
            console.error(error)
            setLoading(false)
        });


    }




    const changeHandler = (e) => {
        setSearchValue(e.target.value)
    }


    const submitHandler = (e) => {
        e.preventDefault()
        if (searchValue !== '') {
            setLoading(true)
            getVideos(searchValue)
        }
    }

    const openVideo = (youTubeId) => {
        setVideoId(youTubeId)
        setShowVideo(true)
    }

    if (showVideo === false) {
        return (
            <NutritionsPageStyled>
                <p>Search for food videos</p>
                <FormStyled name='videos' onSubmit={submitHandler}>
                    <FaSearch className="search-icon" />
                    <input type='text' onChange={changeHandler} />
                    <StyledButton>Submit</StyledButton>
                </FormStyled>
                <ResultsArea>
                {results.length > 0 && <p>Total Results  {results.length} </p>}
                {loading && <p>Loading...</p>}

                <br />
                {
                    loading ? 
                    <ClockLoader
                        loading={loading}
                        size={150}
                        color='orange'
                        display="flex"
                        /> :
                 results.length > 0 &&
                 results.map(result => <><p>{result.title.split('-')[0]}</p><ResultItem key={result.youTubeId}><img src={result.thumbnail} onClick={() => openVideo(result.youTubeId)} /></ResultItem></>)
                }

                <br />
                <br />
                </ResultsArea>
            </NutritionsPageStyled>
        );
    } else {
        return (
            <VideoPlayerContainer>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen="allowfullscreen"
                    mozallowfullscreen="mozallowfullscreen"
                    msallowfullscreen="msallowfullscreen"
                    oallowfullscreen="oallowfullscreen"
                    webkitallowfullscreen="webkitallowfullscreen">
                </iframe>
                <StyledButton onClick={() => setShowVideo(false)}>Close Video</StyledButton>
                <StyledButton onClick={()=>addItem(videoId)}>Add To Favorites</StyledButton>
            </VideoPlayerContainer>
        )
    }

};

export default RecipeVideos;