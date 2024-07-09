// App.js (menggunakan Context)
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import FormInput from './FormInput';
import { ShoeContext } from './ShoeContext'; // Import Context
import './styles.css';

const App = () => {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Shoe Inventory</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/add">Add Shoe</Nav.Link>
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<FormInput />} />
      </Routes>
    </Container>
  );
};

export default App;
