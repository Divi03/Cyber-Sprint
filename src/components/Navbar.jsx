import React from 'react';
import { SiFampay} from 'react-icons/si'
import { RxAvatar } from 'react-icons/rx'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Navbar, Container, Nav} from 'react-bootstrap';  
import { Link } from 'react-router-dom';
import home from '../Pages/Home';
import './navbar.css'

function head() {
  return (
    <>  
    <Navbar fixed='top' bg="light" expand="lg">  
    <Container> 

      <Navbar.Brand href="#">
        <SiFampay size={50}/>
      </Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <Nav.Link href="#home">Home</Nav.Link>  
          <Nav.Link href="#link" id='Nav-link'>
            <div className='avatar'>
                {/* <RxAvatar size={50}/> */}
                <span>Setting</span>
            </div>
            </Nav.Link>  
        </Nav> 
        </Navbar.Collapse>  

        {/* <div className='logo-container'>
          <SiFampay size={50}/>
        </div>

        <div className='nav-links-container'>
          <div className='nav-links'>
            <Link to='/home'>Home</Link>
          </div>

          <div className='nav-links '>
            <RxAvatar size={50}/>
            <span>UserName</span>
          </div>
        </div> */}
    </Container>  
  </Navbar>  

  </>  
  );
}

export default head;

