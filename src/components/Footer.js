import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyled>
  
        <h3>&copy; Healthy Hood {new Date().getFullYear()}</h3>
    

      <div class="custom-shape-divider-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
min-height: 50vh;
  background-color: rgb(254, 233, 218);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  

  h3 {
      color: rgb(62, 50, 85);;
      margin-bottom: 2rem;
    }

  .custom-shape-divider-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    

    svg {
      position: relative;
      display: block;
      width: calc(116% + 1.3px);
      height: 500px;
      transform: rotateY(180deg);
      
    }

    .shape-fill {
      fill: #ffffff;
    }
  }
`;

export default Footer;
