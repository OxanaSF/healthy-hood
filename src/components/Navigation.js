import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar>
     
      <Container>
      <Navbar.Toggle>
        <Navbar.Collapse>
          <Nav>
            <Nav.NavLink to="/nutritions">nutritions</Nav.NavLink>
            <Nav.NavNav.Link to="/fitness">fitness</Nav.NavNav.Link>
            <Nav.NavLink to="/clean-air">clean-air</Nav.NavLink>
            <Nav.NavLink to="/mental-health">mental health</Nav.NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar.Toggle>
      </Container>
    </Navbar>
  );
};

export default Navigation;
