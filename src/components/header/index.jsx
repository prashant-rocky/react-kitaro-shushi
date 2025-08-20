import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import '../../assets/style.css'; 
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false); // state to control collapse

  const Reserve = () => {
    navigate("/reservation");
    setExpanded(false); // close navbar after click
  };

  const Scroll = () => {
    window.scrollTo(0, 0);
    setExpanded(false); // also close navbar
  };

  return (
    <Navbar 
      expand="lg" 
      expanded={expanded} 
      onToggle={(isOpen) => setExpanded(isOpen)} 
      className="bg-body-tertiary position-sticky top-0 start-0 z-3"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className="nav-link-custom px-3" onClick={Scroll}>
            <img src={logo} alt="Hakato Kitaro Sushi Logo" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)} 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav>
              <Link to="/" className="nav-link-custom px-3" onClick={Scroll}>Home</Link>
            </Nav>
            <Nav>
              <NavLink to="/about" className="nav-link-custom px-3" onClick={Scroll}>About</NavLink>
            </Nav>
            <Nav>
              <NavLink to="/blog" className="nav-link-custom px-3" onClick={Scroll}>Blog</NavLink>
            </Nav>
            <Nav>
              <NavLink to="/menu" className="nav-link-custom px-3" onClick={Scroll}>Menu</NavLink>
            </Nav>
            <Nav>
              <NavLink to="/contact" className="nav-link-custom px-3" onClick={Scroll}>Contact</NavLink>
            </Nav>
          </Nav>
          <button className="mainBtn ms-md-5" onClick={Reserve}>Reservation</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
