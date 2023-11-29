import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const DeleteMylist = () => {
 const  {id}= useParams();
 const navigate=useNavigate()
 const deletebook=(e)=>{
  e.preventDefault()
  axios.delete(`http://127.0.0.1:8080/relation/${id}`)
.then(() => { navigate('/books') }).catch((err) => console.log(err))

 }
  return (
    <Container>
        <Row className="mx-auto">
          <Col className='mx-auto' md="6">
            <h2>  Are you sure! you want to delete! </h2>
            <Form onSubmit={(e)=>deletebook(e)}>
            
              <Button
              className='mx-auto'
              variant="primary" 
              type="submit">
                Delete
              </Button>
            </Form>

          </Col>
        </Row>
        
      </Container>
  )
}



export default DeleteMylist
