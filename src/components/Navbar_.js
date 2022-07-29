import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';


const Navbar_ = () =>{
    return(
        <Navbar bg="light" variant="dark" >
        <Container>
          <Navbar.Brand href="#home" className='text-black fw-bold m-auto p-3'>Shopping Cart</Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default Navbar_