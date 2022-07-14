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
      </div>
      <NavLink to="/savedpages" className="logged-in">
        <div class="button">
          <span> go to your profile</span>
        </div>
      </NavLink>
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

  .logged-in {
    .button {
      margin-right: 5rem;
      margin-top: 3rem;
      width: 400px;
      height: 100px;
      background: #f3f0f1;
      position: relative;
      background: #f3f0f1;
      margin-bottom: 25px;
      border-radius: 32px;
      text-align: center;
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      span {
        line-height: 100px;
        font-family: 'Montserrat', sans-serif;
        font-size: 32px;
        font-weight: semibold;
      }
      &:nth-child(1) {
        box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
          6px 6px 10px rgba(0, 0, 0, 0.2);
        color: #9996b3;

        &:hover {
          opacity: 0.3;
          box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
            6px 6px 10px rgba(0, 0, 0, 0.2);
        }
        &:active {
          opacity: 1;
          box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
            inset 8px 8px 16px rgba(0, 0, 0, 0.1);
          color: lightblue;
        }
      }
      &:nth-child(2) {
        opacity: 0.3;
        box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
          6px 6px 10px rgba(0, 0, 0, 0.2);
        color: #6f6cde;
      }
      &:nth-child(3) {
        box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
          inset 8px 8px 16px rgba(0, 0, 0, 0.1);
        color: lightblue;
        &:hover {
          opacity: 1;
          box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
            6px 6px 10px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }

  @media only screen and (max-width: 930px) {
    .logged-in {
      .button {
        width: 90%;
        margin: auto;
      }
    }
  }

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
