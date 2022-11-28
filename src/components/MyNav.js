import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const MyNav = ({
  normalRef,
  workRef,
  pictureRef,
}) => {
  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">เกี่ยวกับฉัน</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => normalRef.current.scrollIntoView()}>ทั่วไป</Nav.Link>
            <Nav.Link onClick={() => workRef.current.scrollIntoView()}>ผลงาน</Nav.Link>
            <Nav.Link onClick={() => pictureRef.current.scrollIntoView()}>ภาคผนวช</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
