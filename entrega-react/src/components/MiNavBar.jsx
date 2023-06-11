import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const MiNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Dolce Vita Peluquería</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home"><Link to="/">Inicio</Link></Nav.Link>
          <NavDropdown title="Categorías" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to="/category/nutricion">Nutrición</Link></NavDropdown.Item>
            <NavDropdown.Item>
           <Link to="/category/alisadores">Alisadores</Link>
            </NavDropdown.Item>
            <NavDropdown.Item><Link to="/category/coloracion">Coloración</Link></NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>

  )
}

export default MiNavBar
