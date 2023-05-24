import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const MiNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dolce Vita Peluquería</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Productos</Nav.Link>
          <NavDropdown title="Categorías" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Nutrición</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Alisadores
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Coloración</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>

  )
}

export default MiNavBar
