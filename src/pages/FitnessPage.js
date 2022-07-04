import styled from "styled-components"

const FitnessPage = () => {
  return (
    <FitnessPageStyled>
        <h2>This is a Fitness Page that is going to be created by Johnson!</h2>
    </FitnessPageStyled>
  )
}


const FitnessPageStyled = styled.section`
min-height: 70vh;
  h2 {
    margin-top: 5rem;
    text-align: center;
    font-size: 2rem;
  }
`

export default FitnessPage