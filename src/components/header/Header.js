import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className='navBarContainer'>
        <Navbar className="golden-header" bg="dark" variant="dark" expand="lg" >
            <Link className="link" to="/"> <Navbar.Brand >Movie Client</Navbar.Brand></Link>
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
          <Nav.Link  >  <Link className="link" to="/">Home</Link></Nav.Link> 
             <Nav.Link ><Link className="link" to="/">Movies</Link></Nav.Link>
             <Nav.Link ><Link className="link" to="/">About</Link></Nav.Link>

                    
                    
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
}

export default Header;
