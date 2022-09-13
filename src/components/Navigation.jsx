import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoLogoReact } from "react-icons/io5";
import styles from '../styles/components/Navigation.module.sass'

function Navigation(){
    
  return(
  
      <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className={styles.navLogo} as={Link} to={'/'} key="1"><IoLogoReact/>M P R
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Apps" id="basic-nav-dropdown">
                {/* <NavDropdown.Item>Calculadora de média</NavDropdown.Item>
                <NavDropdown.Item>Conversor de moedas</NavDropdown.Item> */}
                <NavDropdown.Item as={Link} to="/temperature" key="2">Conversor de temperaturas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to={'/'} key="3">Home</NavDropdown.Item>
                <NavDropdown.Item href="https://www.github.com/vieira-a" target="blank">Projetos no GitHub</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

    );
  
};

export default Navigation;