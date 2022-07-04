import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <NavStyled>
      <Link to="/">
        <img
          src={`${process.env.PUBLIC_URL}/images/healthy-lifestyle.png`}
          alt="fitness"
        />
      </Link>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  min-height: 7rem;
  text-align: left;
  background-color: rgb(254, 233, 218);

  img {
    width: 9rem;
    margin: 1rem;
  }
`;

export default Nav;
