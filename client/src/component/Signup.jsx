import React from 'react'
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
const navigate=useNavigate()
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8080/users',{name,email,password})
    .then((res)=>{navigate('/books')})
    .catch((err)=>console.log(err))
    e.preventDefault();
  };

  return (
    
     <Container>
      <Row className="justify-content-md-center" style={{ fontSize: '2rem',}}>
        <Col md="6">
      <h2 className=" text-center" >Sign Up</h2>
      <Form  className='p-3 mb-2 bg-light text-dark' onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label  >Name</Form.Label>
        <Form.Control
        style={ {fontSize: '2rem'}} 
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
        style={ {fontSize: '2rem'}} 
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Password</Form.Label>
        <Form.Control
        style={ {fontSize: '2rem'}} 
          type="text"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </Form.Group>

      <Button variant="primary"
       className=' btn btn-secondary btn-lg'
       type="submit">
        Submit
      </Button>
    </Form>
    
    </Col>
      </Row>
    </Container>
  );
  
}

export default Signup
