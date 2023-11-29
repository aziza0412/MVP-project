import axios from 'axios';
import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const [author,setAuthor]=useState('')
  const [image,setimage]=useState('')
  const [publication_date,setpublication_date]=useState('')
  const [votes,setVotes]=useState(0)
  const navigate = useNavigate();
console.log(title)
const addBook=(e)=>{
  e.preventDefault()
  axios.post('http://127.0.0.1:8080/books/',{title,description,author,image,publication_date,votes})
  .then(()=>{navigate('/books')}).catch((err)=>console.log(err))
}
  
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center" style={{ fontSize: '2rem',}}>
          <Col md="6">
            <h2 className=" text-center" >Add books</h2>
            <Form className='p-3 mb-2 bg-light text-dark' onSubmit={(e)=> addBook(e)}>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                style={ {fontSize: '2rem'}} 
                  type="text"
                  placeholder="Enter  the title"
                  value={title}
                  onChange={(e)=>{setTitle(e.target.value)}}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formauther">
                <Form.Label>Author</Form.Label>
                <Form.Control
                style={ {fontSize: '2rem'}} 
                  type="text"
                  placeholder="Enter  the Author"
                  value={author}
                  onChange={(e)=>{setAuthor(e.target.value)}}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                style={ {fontSize: '2rem'}} 
                  type="text"
                  placeholder="Enter the description"
                  value={description}
                  onChange={(e)=>{setDescription(e.target.value)}}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formimage">
                <Form.Label >url img</Form.Label>
                <Form.Control
                style={ {fontSize: '2rem'}} 
                  type="text"
                  placeholder="Enter the url img"
                  value={image}
                  onChange={(e)=>{setimage(e.target.value)}}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formpulblichday">
                <Form.Label> Date</Form.Label>
                <Form.Control
                style={ {fontSize: '2rem'}} 
                  type="text"
                  placeholder="Enter the publication_dateing date"
                  value={publication_date}
                  onChange={(e)=>{setpublication_date(e.target.value)}}
                  required
                />
              </Form.Group>
              <Button 
              className=' btn btn-secondary btn-lg'
              variant="primary" 
              type="submit">
                ADD
              </Button>
            </Form>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AddBooks
