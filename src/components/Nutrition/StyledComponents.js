import styled from 'styled-components'


export const NutritionsPageStyled = styled.section`
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
  p{
    font-weight: bold;
    font-size: 1.5rem;
    margin: 4rem;
  }
`

export const RecipePageStyle = styled.section`

display: flex;
flex-direction: column;
align-items: center;
border-radius: 2.5rem;
border: solid lightblue 5px;
margin: 1rem;
margin-top: 5rem;
padding: 5rem 10rem;

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
  p{
    font-weight: bold;
    font-size: 1.5rem;
    margin: 4rem;
  }
`


export const FormStyled = styled.form`
padding-top: 5rem;
margin: auto;
position: relative;
min-width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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
    border: 5px solid lightblue;
    padding: 1rem 3rem;
    margin-bottom: 3rem;
    border-radius: 1rem;
    outline: none;
    font-size: 1rem;
    width: 100%;

    text-align: center;
    color: #999999;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .search-icon {
    /* position: absolute;
    top: 3rem;
    left: 35rem; */
    font-size: 2rem;
    color: lightblue;
    margin-right: 2rem;
    font-weight: 100;
  }

`;


export const StyledButton = styled.button`
    background-color: #E67B71;
    padding: 20px;
    border-radius: 10px;
    margin: 20px;

    &:hover{
        cursor: pointer;
        background-color: #d95f55; 
    }
`

export const ResultItem = styled.div`
    padding: .2rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
    width: fit-content;
    border: solid 10px #A0DAF1;
    border-radius: 3rem;

    img {
        border-radius: 3rem;
    }

    & > img:hover{
        cursor: pointer;
    }
`

export const ResultsArea = styled.div`
    margin: 150px 10px 100px 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
      margin-bottom: 1rem;
    }
`

export const VideoPlayerContainer = styled.div `
    padding: 50px;
    border-radius: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    border: solid 10px #A0DAF1;
`