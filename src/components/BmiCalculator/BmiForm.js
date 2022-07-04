import styled from 'styled-components';
import { useRef, useState } from 'react';

const BmiForm = () => {
  const [enteredFeet, setEnteredFeet] = useState('');

  const feetInputChangeHandler = (event) => {
    setEnteredFeet(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault()
    console.log(enteredFeet)
    setEnteredFeet('')
  }

  return (
    <BmiFormStyled onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <h3>Your height</h3>
        <div>
          <label htmlFor="feet">feet</label>
          <input 
                type="number" 
                id="feet" 
                onChange={feetInputChangeHandler} 
                value={enteredFeet}
                />

          <label htmlFor="inches">inches</label>
          <input type="number" id="inch" />
        </div>

        <div>
          <h3>Your weight</h3>
          <label htmlFor="feet">pounds</label>
          <input type="number" id="pounds" />
        </div>
      </div>
      <div className="form-actions">
        <button>Compute BMI</button>
      </div>
    </BmiFormStyled>
  );
};

const BmiFormStyled = styled.form`
  .form-control {
    margin-bottom: 1rem;
  }

  .form-control input,
  .form-control label {
    display: block;
  }

  .form-control label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .form-control input,
  .form-control select {
    font: inherit;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }

  .form-control input:focus {
    outline: none;
    border-color: #240370;
    background-color: #e0d4fd;
  }

  .control-group {
    display: flex;
    column-gap: 1rem;
    flex-wrap: wrap;
  }

  .control-group .form-control {
    min-width: 15rem;
    flex: 1;
  }

  button {
    font: inherit;
    background-color: #240370;
    color: white;
    border: 1px solid #240370;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover,
  button:active {
    background-color: #33059e;
    border-color: #33059e;
  }

  .form-actions {
    text-align: right;
  }

  .form-actions button {
    margin-left: 1rem;
  }

  .invalid input {
    border: 1px solid #b40e0e;
    background-color: #fddddd;
  }

  .invalid input:focus {
    border-color: #ff8800;
    background-color: #fbe8d2;
  }

  .error-text {
    color: #b40e0e;
  }
`;

export default BmiForm;
