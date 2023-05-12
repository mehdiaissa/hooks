import React,{useState   } from 'react'
import { InputGroup,FormControl,Button,Modal,Form } from 'react-bootstrap';
const showalert=()=>{
  alert('merci rimel juste j ai des quelques question le dimanche incha2alah')
}
const Addmovies = ({movies,setmovies})=> {
  const [show,setshow]=useState(false)
 const [NewTitle,setNewTitle]=useState()
 const [NewRate,setNewRate]=useState()
 const [NewPoster,setNewPoster]=useState() 
 const [NewDescription,setNewDescription]=useState()
  
  const handleShow =()=>{
    setshow(true )
  }
  const handleClose =()=>{
    setshow(false )
  }
  const NewMovie =()=>{
    let newMovie={
      id:Math.random(),
      name:NewTitle,
      image:NewPoster,
      rating:NewRate,
      Description:NewDescription,
    }
    setmovies([...movies,newMovie])
    handleClose()
  }
  
  return (
    
    <div>
      <Button variant="outline-success" onClick={handleShow}>Add New Movie</Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text 
            id="inputGroup-sizing-default"
            
            >Enter Movie title</InputGroup.Text>
              <FormControl
                 aria-label="Default"
                 aria-describedby="inputGroup-sizing-default"
                 onChange ={(e) => setNewTitle(e.target.value)}
                 
              />
            </InputGroup>
             <br />

             <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Enter Movie Rating</InputGroup.Text>
              <FormControl
                 aria-label="Default"
                 aria-describedby="inputGroup-sizing-default"
                 onChange ={(e) => setNewRate(e.target.value)}

                 
              />
            </InputGroup>
             <br />

             <InputGroup className="mb-3">
             <InputGroup.Text id="inputGroup-sizing-default">Enter Movie PosterURL</InputGroup.Text>
              <FormControl
                 aria-label="Default"
                 aria-describedby="inputGroup-sizing-default"
                 onChange ={(e) => setNewPoster(e.target.value)}
                 
              />
            </InputGroup>
             <br />

             


             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               <Form.Label>Enter Movie Description</Form.Label>
               <Form.Control as="textarea" rows={3} onChange ={(e) => setNewDescription(e.target.value)} />
             </Form.Group>


             
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={NewMovie}>Save</Button>
          
        </Modal.Footer>
      </Modal>
      <Button variant="primary"style={{ backgroundColor: 'red', color: 'white' }} onClick={showalert}>alerte</Button>
    </div>
  )
  
}

export default Addmovies
