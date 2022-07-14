import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';


const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const YOUR_PUBLIC_KEY = process.env.REACT_APP_API_KEY_GMAIL;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactStyled>

      <h1>Contact us</h1>
      <div className="form-wrapper">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" className="send" />
        </form>
      </div>
    </ContactStyled>
  );
};

const ContactStyled = styled.section`
  width: 60%;
  margin: auto;
  margin-bottom: 5rem;
  border-radius: 3rem;
  border: 5px solid rgb(254, 233, 218);

  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);


  color: #9996b3;
  font-size: 3rem;
  font-weight: 500;

  .form-wrapper {
    margin: 2rem;
  }

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      color: #9996b3;
      letter-spacing: 1px;
      font-weight: 600;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid #9996b3;
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      border-bottom: none;
      color: #9996b3;
      letter-spacing: 1px;
      font-weight: 600;
      &:focus {
        border: 2px solid #9996b3;
      }
    }
    label {
      margin-top: 1rem;
      color: #9996b3;
    }
    input[type='submit'] {
      border-bottom-left-radius: 3rem;
      border-bottom-right-radius: 3rem;
      cursor: pointer;
      background: rgb(254, 233, 218);
      color: #9996b3;
      border: none;
      height: 4rem;
    }
  }

  @media (max-width: 1150px) {
    width: 80%;
  }


  @media only screen and (max-width: 930px) {
    width: 95%;
    height: 30rem;
    margin: auto;
    margin-bottom: 2rem;
    h1 {
      font-size: 2rem;
    }

    
  }
`;

export default Contact;
