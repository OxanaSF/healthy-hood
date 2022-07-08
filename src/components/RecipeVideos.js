import axios from "axios"
import { useState } from 'react'
import styled from 'styled-components'

const FormStyled = styled.form`
  padding-top: 5rem;
  margin: auto;
  position: relative;
  width: 25%;

  .search-icon {
    position: absolute;
    top: 6.1rem;
    left: 1.6rem;
    font-size: 2rem;
    color: #999999;
    margin-right: 2rem;
    font-weight: 100;
  }

  input {
    border: 1px solid #999999;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
    color: #999999;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;
// const DUMMY_DATA = [{
//     title: "how to make chicken soup - dinner recipes - homemade from scratch - stock recipes -",
//     youTubeId: "2h0bhpqFKpM",
//     rating: 1,
//     views: 379,
//     thumbnail: "https://i.ytimg.com/vi/2h0bhpqFKpM/mqdefault.jpg",
//     length: 476
// },
// {
//     title: "how to make chicken soup - dinner recipes - homemade from scratch - stock recipes -",
//     youTubeId: "dfaj4vI8QxE",
//     rating: 1,
//     views: 379,
//     thumbnail: "https://i.ytimg.com/vi/2h0bhpqFKpM/mqdefault.jpg",
//     length: 476
// },
// {
//     title: "how to make chicken soup - dinner recipes - homemade from scratch - stock recipes -",
//     youTubeId: "wdvruTuWvW8",
//     rating: 1,
//     views: 379,
//     thumbnail: "https://i.ytimg.com/vi/2h0bhpqFKpM/mqdefault.jpg",
//     length: 476
// }]



const RecipeVideos = () => {

    const [searchValue, setSearchValue] = useState('')
    const [results, setResults] = useState([])
    const [showVideo, setShowVideo] = useState(false)
    const [videoId, setVideoId] = useState('')



    const getVideos = (value) => {

        const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/videos/search',
            params: {
                query: value,
                minLength: '0',
                maxLength: '999',
                number: '10',
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
            setResults(response.data.videos)
            setSearchValue('')
        }).catch(function (error) {
            console.error(error)
        });


    }




    const changeHandler = (e) => {
        setSearchValue(e.target.value)
    }


    const submitHandler = (e) => {
        e.preventDefault()

        if (searchValue !== '') {
            getVideos(searchValue)
        }
    }

    const openVideo = (youTubeId) => {
        setVideoId(youTubeId)
        setShowVideo(true)
    }

    if (showVideo === false) {
        return (
            <div>
                Search for food videos
                <FormStyled name='videos' onSubmit={submitHandler}>
                    <label>Search by food:</label>
                    <input type='text' placeholder='chicken soup' onChange={changeHandler} />
                    <button>Submit</button>
                </FormStyled>
                <br />
                {results.length > 0 && <p>Total Results  {results.length} </p>}
                <br />
                {results.length > 0 && results.map(result => <><img src={result.thumbnail} onClick={() => openVideo(result.youTubeId)} /><br /></>)}

                <br />
                <br />
            </div>
        );
    } else {
        return (
            <div>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen="allowfullscreen"
                    mozallowfullscreen="mozallowfullscreen" 
                    msallowfullscreen="msallowfullscreen" 
                    oallowfullscreen="oallowfullscreen" 
                    webkitallowfullscreen="webkitallowfullscreen">
                </iframe>
                <button onClick={() => setShowVideo(false)}>Close Video</button>
            </div>
        )
    }

};

export default RecipeVideos;