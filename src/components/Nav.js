import styled from "styled-components"

const Nav = () => {
  return (
    <NavStyled>
     <h2>
     <img
            src={`${process.env.PUBLIC_URL}/images/healthy-lifestyle.png`}
            alt="fitness"
          />
     </h2> 
    </NavStyled>
  )
}

const NavStyled = styled.nav`
min-height: 7rem;
text-align: left;
background-color: rgb(254, 233, 218);

img{
  width: 9rem;
  margin: 5rem;
}
`

export default Nav

