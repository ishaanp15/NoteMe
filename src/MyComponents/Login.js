import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Login(props) {
    
    const submit = (e) => {
    e.preventDefault();
     props.Loggedin();
  };


    return (

        <Container>
           <h3>Login</h3>
    <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="desc">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text"  placeholder="Enter Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </Container>

        );
    
}
