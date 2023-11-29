import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


const UpdateBooks = () => {
  const navigate=useNavigate()
  const  {id}= useParams();
  console.log(id)
  const update=(e)=>{
    e.preventDefault()
    axios.put(`http://127.0.0.1:8080/books/${id}`)
    .then(()=>{navigate('/books')}).catch((err)=>console.log(err))
    
  }
  return (
    <div>
   <Container>
        <Row className="justify-content-md-center">
          <Col md="6">
            <h2>If you enjoyed reading this book , please don't forget to rate it , it will help us ! </h2>
            <Form onSubmit={(e)=>update(e)}>
            
              <Button 
              variant="primary" 
              type="submit">
                Vote
              </Button>
            </Form>

          </Col>
        </Row>
        <img src={'https://static.vecteezy.com/system/resources/previews/006/115/725/non_2x/black-and-white-open-book-logo-illustration-on-white-background-free-vector.jpg'} className="card-img-top figure-img img-fluid rounded " />
      </Container>
    </div>
  )
}

export default UpdateBooks
