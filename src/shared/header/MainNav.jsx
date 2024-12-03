import React from 'react'
import { Link, RouterProvider } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function MainNav() {
  return (
    <Navbar expand="lg" className="bg-light">
    <Container>
      <h1>
          <Link to='/'>Posts</Link>
      </h1>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link  to="/">Home</Link>
          </Nav>
      </Navbar.Collapse> */}
    </Container>
  </Navbar>
  )
}
