import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
const Signin = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user,setUser]=useState([])
const navigate=useNavigate()
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   var arr= user.filter((ele)=>{return ele.name===name && ele.password===password})
   console.log(arr,name,password)
   if(arr.length>0){navigate(`/books/users/${arr[0].idusers}`)}
  };
  useEffect(()=>{
    axios.get('http://127.0.0.1:8080/users').then((res)=>{
    setUser(res.data)}).catch((err)=>{
        console.log(err)
    })
  },[])
 console.log(user)

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <Row className="justify-content-md-center" style={{ fontSize: '2rem',}}>
        <Col md="6">
      <h2 className=" text-center" >Sign In</h2>
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
  )
}

export default Signin
