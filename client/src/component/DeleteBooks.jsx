import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const DeleteBooks = () => {
 const  {id}= useParams();
 const navigate=useNavigate()
 const deletebook=(e)=>{
  e.preventDefault()
  axios.delete(`http://127.0.0.1:8080/books/${id}`)
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
        <img src={'https://static.vecteezy.com/system/resources/previews/006/115/725/non_2x/black-and-white-open-book-logo-illustration-on-white-background-free-vector.jpg'} className="card-img-top figure-img img-fluid rounded " />
      </Container>
  )
}

export default DeleteBooks
