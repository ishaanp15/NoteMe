import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand >Note Me</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/user/home" >All Notes</Nav.Link>
            <Nav.Link as={Link} to="/user/newNote">Create a Note</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        <br />
        </>
    )
}
