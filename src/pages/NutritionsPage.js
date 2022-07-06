import styled from "styled-components"
import axios from "axios"
import { useState } from 'react'



const NutritionsPage = () => {

  const [searchValue, setSearchValue] = useState('')
  const [results, setResults] = useState([])
  
  const fetchByNutrition = () =>{

    console.log('nutrition')

    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients',
      params: {
        limitLicense: 'false',
        minProtein: '20',
        maxCalories: '250',
        offset: '0',
        maxCarbs: '0',
        number: '50'
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_3,
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };

    // axios.request(options).then(function (response) {
    //   console.log('response....')
    //   console.log(response.data)

    // }).catch(function (error) {
    //   console.error(error)
    // })


}




const getSimilar = () => {
  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/1056/similar',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_3,
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  }
  
  axios.request(options).then(function (response) {
    console.log(response.data)
  }).catch(function (error) {
    console.error(error)
  })

}




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


const submitHandler = (e, formName) => {
  e.preventDefault()
  let value = searchValue.trim()
  if(value !== ''){
    console.log(value)
    console.log(formName)
    switch(formName){
      case 'videos': getVideos(value)
          break
      case 'nutrition': fetchByNutrition()
          break
      default: console.log('something happened')
    }
  }else{
    return
  }
  
}

 return (
    <NutritionsPageStyled>
        <h2>This is a Nutritions Page that is going to be created by Mike!</h2>
        Search for food videos 
        <form onSubmit={(e)=>submitHandler(e, 'videos')}>
          <label>Search by food:</label>
          <input type='text' placeholder='chicken soup' onChange={changeHandler} />
          <button>Submit</button>
        </form>
         <br />
         {results.length > 0 && <p>Total Results  {results.length} </p> }
         <br />
        {results.length > 0 && results.map(result => <a key={result.youTubeId} href={'https://www.youtube.com/watch?v=' + result.youTubeId} title={result.title}><img src={result.thumbnail} /></a> )}
        <br />
        <br />

        Search for recipes by nutrition content <br />
        <form onSubmit={(e)=>submitHandler(e, 'nutrition')}>
         
          <label>Minimum Protein in grams:</label>
          <input type='text' placeholder='10' />
          <label>Maximum Calories:</label>
          <input type='text' placeholder='100' />
          <label>Maximum Carbs</label>
          <input type='text' placeholder='100' />

          <button>Submit</button>
        </form>
          - See similar recipes
        <br />
        
    </NutritionsPageStyled>
  )
}

const NutritionsPageStyled = styled.section`
min-height: 70vh;
  h2 {
    margin-top: 5rem;
    text-align: center;
    font-size: 2rem;
  }
`

export default NutritionsPage