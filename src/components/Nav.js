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
        <NavLink to="/nutritions">nutritions</NavLink>
        <NavLink to="/fitness">fitness</NavLink>
        <NavLink to="/clean-air">clean-air</NavLink>
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
    gap: 2.5rem;

    a{
      color: #8c777c;
      font-size: 2rem;
      font-weight: 500;
      letter-spacing: 0.1rem;
    }

    a.active {

    }

  }

  img {
    width: 7rem;
    margin: 1rem;
  }
`;

export default Nav;
