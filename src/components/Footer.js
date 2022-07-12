import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyled>
      <h3>&copy; Live Healthy {new Date().getFullYear()}</h3>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  min-height: 10vh;
  background-color: rgb(254, 233, 218);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  h3 {
    color: rgb(62, 50, 85);
    margin-bottom: 2rem;
  }
`;

export default Footer;
