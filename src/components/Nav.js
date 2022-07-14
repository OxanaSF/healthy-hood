import { useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <NavLink to="/savedpages" className="logged-in">
          
          go to your profile
        </NavLink>
      </div>
      <div
        className={`nav-toggle ${isOpen && 'open'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
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
    .logged-in {
      background-color: lightblue;
      font-size: 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      border-radius: 1rem;
      font-weight: 600;
      color: #9996b3;
    }
  }

  img {
    width: 7rem;
    margin: 1rem;
  }

  .nav-toggle {
    display: none;
  }

  @media (max-width: 1050px) {
    /* background-color: red; */
    .nav-links {
      font-size: 1.5rem;
      gap: 1.5rem;
    }
  }

  @media (max-width: 860px) {
    /* background-color: green; */

    .nav-links {
      font-size: 1.1rem;
      gap: 1rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;

    img {
      width: 5rem;
      margin: 1rem;
    }

    .nav-links {
      justify-content: center;
      margin: 0;
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 500px) {
    img {
      width: 5rem;
      margin: 1rem;
    }

    .nav-links {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      margin: 0;
      font-size: 1.2rem;
      margin-bottom: 2rem;
      text-align: center;
    }
  }
`;

export default Nav;
