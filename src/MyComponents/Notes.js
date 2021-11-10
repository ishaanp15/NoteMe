import React from 'react'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import Note from './Note'
import LottieAnimation from '../Lottie';
import empty from '../Animations/empty-box.json';

export default function Notes(props) {

    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }

    return (
        <Container>
         <div style={myStyle}>
            <h3 className="my-3">Notes</h3>
            {props.notes.length===0? <div> 
           <LottieAnimation lotti={empty} height={300} width={300} loop={false} />
           <h2 className="text-center">No Note to Display</h2>
        </div>:  
            props.notes.map((note)=>{
                return (<Note note={note} key={note.sno} onDelete={props.onDelete} editNote={props.editNote} markImp={props.markImp}/>   
                )
            })
              } 
        </div>
        </Container>
    )
}
