import styled from "styled-components"
import AnimatedPage from "../components/AnimatedPage"

const NutritionsPage = () => {
  return (
    <AnimatedPage>
    <NutritionsPageStyled>
        <h2>This is a Nutritions Page that is going to be created by Mike!</h2>
        <p>I am working on this now</p>
    </NutritionsPageStyled>
    </AnimatedPage>
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