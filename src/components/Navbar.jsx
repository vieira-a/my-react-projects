import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AppNavbar(){
    return(
      <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="index.html">Imersão Dev Alura com React JS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Apps" id="basic-nav-dropdown">
                <NavDropdown.Item id="avgCalculate" href="#">Calculadora de média</NavDropdown.Item>
                <NavDropdown.Item href="#">Conversor de moedas</NavDropdown.Item>
                <NavDropdown.Item id="tempConvert" /*onClick={LoadTemperatureConverter}*/ href="#">Conversor de temperaturas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Projetos no GitHub</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
    )
  }

export default AppNavbar;