import styled from "styled-components"
import { Link,Outlet } from "react-router-dom"

const NutritionsPage = () => {

  return (
    <NutritionsPageStyled>
  
      <h2>Find A Recipe For Your Healthy Lifestyle Today</h2>
      <div>
        <Link to='recipe-videos' className='nutritionLink'>Find A Video Of A Recipe</Link>
        <Link to='search-by-nutrition' className='nutritionLink'>Find A Recipe By Nutritional Content</Link>
      </div>
      <Outlet />
    </NutritionsPageStyled>
  )
}

const NutritionsPageStyled = styled.section`
min-height: 70vh;
display: flex;
flex-direction: column;
align-items: center;


  h2 {
    margin-top: 5rem;
    margin-bottom: 5rem;
    text-align: center;
    font-size: 2rem;
  }

  a{
    margin: 50px;
  }
  .nutritionLink{
    font-size: 1.5rem;
  }
`

export default NutritionsPage;
