import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import { Link } from "react-router-dom";

const Header = () => { 

    return (
        <div className="Header">
          <header> 
          <Navbar bg="primary" variant="dark" >
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <button> <Link to="/"> To do  </Link> </button>
                <button className='mx-2'> <Link to="/Done"> Done  </Link> </button>
              </Nav>
            </Container>
          </Navbar>
          </header> 
        </div>
      );
}

export default Header;