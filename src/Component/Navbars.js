import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";


function Navbars({namesearch,setnamesearch,ratsesearch,setratsearch,movies,setmovies}) {
  const Ratingchanged=(e)=>{
    setratsearch(e)
  }
  const refrech =()=>{
    window.location.reload()
  }
  const handelchange =(e)=>{
setnamesearch(e.target.value)
  }
  return (
    <Navbar bg="black" expand="lg">
      <Container >
        <Navbar.Brand style={{color:"white",fontSize:"30px"}}>MOVIE APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          > 
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handelchange}
              value={namesearch}
            />
            
            
          </Form>
          
        </Navbar.Collapse>
        <ReactStars
                        count={6}
                        size={24}
                        onChange={Ratingchanged}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                        value={ratsesearch}
                        edit={true}
        />
        <Button variant="outline-success" onClick={refrech}>RESET</Button>
      </Container>
    </Navbar>
  )
}

export default Navbars