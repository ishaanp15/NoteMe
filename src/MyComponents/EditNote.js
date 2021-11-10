import React, { useState } from "react";
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";

export default function NewNote(props) {
  const [title, setTitle] = useState(props.editedNote.title);
  const [desc, setDesc] = useState(props.editedNote.desc);
  const [isImp, setIsImp] = useState(false);
  let [Redirectop, setRedirect] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Title cannot be blank");
    } else {
      props.addNote(title, desc, isImp);
      setTitle("");
      setDesc("");
      alert("Note Edited");
      props.setRed();
      setRedirect(Redirectop = true);
    }
  };
  if(Redirectop) {
    return( 
    <> 
    <Router>
        <Redirect to="/user/home" /> 
    </Router>
    </>
   
    );
  }
  return (
      <Container>
           <h3 className="my-3">Edit a Note</h3>
    <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title of the note</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Form.Text className="text-muted">
          Title cannot be blank
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="desc">
        <Form.Label>Description of the note</Form.Label>
        <Form.Control as="textarea" rows={3} value={desc} onChange={(e) => setDesc(e.target.value)} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox"  value={isImp} onChange={(e) => setIsImp(e.target.checked)}label="Mark as Imported" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Edit Note
      </Button>
    </Form>
    </Container>
  );
}