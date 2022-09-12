import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation(){
    
  return(
  
      <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={'/'} key="1">Alura - Imersão Dev</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Aplicativos" id="basic-nav-dropdown">
                <NavDropdown.Item>Calculadora de média</NavDropdown.Item>
                <NavDropdown.Item>Conversor de moedas</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/temperature" key="2">Conversor de temperaturas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Projetos no GitHub</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

    );
  
  }

export default Navigation;