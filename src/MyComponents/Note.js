import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

export default function Note({note,onDelete,editNote,markImp}) {
    return (
            <>
        <div>
           <h4>{note.title}</h4>
           <p>{note.desc}</p>
               {note.isImp
        ? <h6>important note</h6>
        : <Button variant="btn btn-sm btn-secondary mx-1" onClick={()=>{markImp(note)}}>Mark as Important</Button>
      }
           <Button variant="btn btn-sm btn-danger mx-1" onClick={()=>{onDelete(note)}}>Delete</Button>{' '}
           <Button variant="btn btn-sm btn-primary mx-1" onClick={()=>{editNote(note)}}>Edit</Button>{' '}
        </div>
        <hr/> 
        </>
    )
}
