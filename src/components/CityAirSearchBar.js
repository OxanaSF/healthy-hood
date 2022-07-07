import styled from 'styled-components';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { FaSearch } from 'react-icons/fa';
import AnimatedPage from '../animations/AnimatedPageTransition'

const CityAirSearchBar = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(input);
    setInput('');
  };

  return (
    <AnimatedPage>
      <FormStyled onSubmit={onSubmitHandler}>
        <FaSearch className="search-icon" />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="Get air quality data in your city"
        />
      </FormStyled>
      <Outlet />
    </AnimatedPage>
  );
};

const FormStyled = styled.form`
  padding-top: 5rem;
  margin: auto;
  position: relative;
  width: 30%;

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
    border: 1px solid #999999;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    font-size: 1rem;
    width: 100%;
    text-align: center;
    color: #999999;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;

export default CityAirSearchBar;
