import React from 'react'

import {Nav, Navbar,Container,Form,FormControl,Button} from 'react-bootstrap';
import {Link } from 'react-router-dom'
const Navbarre=()=>{

  return(
<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand >Gestion Commerciale</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/Categories">Catégories</Nav.Link>
      <Nav.Link as={Link} to="/Scategories">Sous Catégories</Nav.Link>
      <Nav.Link as={Link} to="/Articles">Liste des Articles</Nav.Link>
      <Nav.Link as={Link} to="/ArticlesCard">Articles Card</Nav.Link>
      <Nav.Link as={Link} to="/ArticlesTable">ArticlesTable</Nav.Link>
      
      
    </Nav>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="success">Chercher</Button>
      </Form>
    </Container>
    

  </Navbar>
  )

}
export default Navbarre
