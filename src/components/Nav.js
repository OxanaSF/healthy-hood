import {useState} from 'react'
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <NavStyled>
      <Link to="/">
        <img
          src={`${process.env.PUBLIC_URL}/images/healthy-lifestyle.png`}
          alt="fitness"
        />
      </Link>
      <div className={`nav-links ${isOpen && 'open'}`}>

        <NavLink to="/">home</NavLink>
        <NavLink to="/nutritions">nutritions</NavLink>
        <NavLink to="/fitness">fitness</NavLink>
        <NavLink to="/clean-air">clean-air</NavLink>
        <NavLink to="/mental-health">mental health</NavLink>
      </div>
      <div className={`nav-toggle ${isOpen && 'open'}`} 
      onClick={() => setIsOpen(!isOpen)}>
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
  }

  img {
    width: 7rem;
    margin: 1rem;
  }

  .nav-toggle {
    display: none;
  }

  @media (max-width: 43.75rem) {
    background-color: red;

    .nav-links {
      position: absolute;
      top: 3.75rem;
      display: flex;
      flex-direction: column;
      background-color: rgb(254, 233, 218);
      left: 0;
      width: 100%;
      height: 100%;
    }

    .nav-toggle {
      display: flex;
      width: 3.125rem;
      height: 3.125rem;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      .bar {
        position: relative;
        width: 2rem;
        height: 0.125rem;
        background: green;
        transition: all .45 ease-in-out;
      }

      .bar::before,
      .bar::after
      {
       content: '';
       width: 100%;
       position: absolute;
       background: purple;
       border-radius: 2px;
       transition: all .45 ease-in-out;
      }

      .bar::before{
        width: 25px;
        transform: translateY()(-8px);
        right: 0;

      }

      .bar::after{
        width: 32px;
        transform: translateY()(8px);

      }
    }
  }
`;

export default Nav;
