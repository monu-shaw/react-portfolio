import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavbarLayout() {
    
    
  return (
    <Navbar className="col-12 col-lg-11 mx-auto my-2 navbar-dark" expand="lg">
    <Container>
        <Navbar.Brand ><Link className="navbar-brand fs-2" to="/">Logo</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-auto">
                <Nav.Link ><Link to="/"className="nav-link fs-4" aria-current="page">Home</Link></Nav.Link>
                <Nav.Link ><Link to="/demo" className="nav-link fs-4">Demo</Link></Nav.Link>
                <Nav.Link ><Link to="/contact" className="nav-link fs-4 ">Contact Us</Link></Nav.Link>
                <Nav.Link ><Link to="/blog" className="nav-link fs-4">Blog</Link></Nav.Link>
            </Nav>
            <div className="d-flex">
                  <Link to="/contact"><button className="btn btn-outline-light rounded-pill p-2 border-0">Contact Us</button></Link>
            </div>
        </Navbar.Collapse>
    </Container>
    </Navbar>

  )
}

export default NavbarLayout