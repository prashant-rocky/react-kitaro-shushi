import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';  
import '../../assets/style.css'; // Import your custom styles
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to="/" className='text-decoratin-none text-black px-3'>
          <img src={logo} alt="error" />
        </Link> </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav><Link to="/" className='text-decoratin-none text-black px-3'>Home</Link> </Nav>
            <Nav><NavLink to="/about" className='text-decoratin-none text-black px-3'>About</NavLink> </Nav>
            <Nav><NavLink to="/blog" className='text-decoratin-none text-black px-3'>Blog</NavLink> </Nav>
            <Nav><NavLink to="/menu" className='text-decoratin-none text-black px-3'>Menu</NavLink> </Nav>
            <Nav><NavLink to="/contact" className='text-decoratin-none text-black px-3'>Contact</NavLink> </Nav>
          </Nav>
        <button className='mainBtn ms-md-5'>Reservation</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;