import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <NavStyled>
      <Link to="/">
        <img
          src={`${process.env.PUBLIC_URL}/images/healthy-lifestyle.png`}
          alt="fitness"
        />
      </Link>
      <div className="nav-links">
        <NavLink to="/">home</NavLink>
        <NavLink to="/nutritions">nutritions</NavLink>
        <NavLink to="/fitness">fitness</NavLink>
        <NavLink to="/clean-air">clean-air</NavLink>
        <NavLink to="/mental-health">mental health</NavLink>
      </div>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  min-height: 7rem;
  text-align: left;
  background-color: rgb(254, 233, 218);

  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-links {
    margin-right: 5rem;
    display: flex;
    gap: 2rem;
    font-size: 2rem;
    cursor: pointer;

    a {
      color: #8c777c;
    }
    
    a.active {
      border-bottom: 5px solid lightblue;
    }
  }

  img {
    width: 7rem;
    margin: 1rem;
  }

  @media only screen and (max-width: 600px) {
    img {
      width: 3rem;
      margin: 1rem;
    }

    .nav-links {
      font-size: 0.9rem;
    }
  }

  @media only screen and (max-width: 900px) {
    img {
      width: 4rem;
      margin: 1rem;
    }

    .nav-links {
      font-size: 0.8rem;
      gap: 1rem;
      margin-right: 2rem;
    }
  }
`;

export default Nav;
