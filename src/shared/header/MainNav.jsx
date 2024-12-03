import React from 'react'
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function MainNav() {
  return (
    <Navbar expand="lg" className="bg-light">
    <Container>
      <h1>
          <Link to='/'>Posts</Link>
      </h1>
    </Container>
  </Navbar>
  )
}
