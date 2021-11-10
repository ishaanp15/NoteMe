import React,{ useState, useEffect, Suspense } from 'react';
import { lazy} from 'react';
import EditNote from './EditNote';
import Header from './Header';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LottieAnimation from '../Lottie';
import loading from '../Animations/loading.json';
const Notes = lazy(() => import("./Notes"));
const NewNote = lazy(() => import("./NewNote"));
export default function MainPage() {

    let initializeNotes; // eslint-disable-next-line
    let [teller,setTeller] = useState(false);
    let [editedNote,setEditedNote] =useState("");
    let [Redirectop, setRedirect] = useState(false);
    
    if (localStorage.getItem("notes") === null) {
    initializeNotes = [
        {
            title: 'Create a note',
            desc:  'Welcome to NoteMe',
            sno: 1,
            isImp: true
        },
    ];
  }
  else {
    initializeNotes = JSON.parse(localStorage.getItem("notes"));
  }
  const [notes, setNotes] = useState(initializeNotes);
    const onDelete = (note) => {
         setNotes(notes.filter((e) => {
      return e !== note;
    }));
    localStorage.setItem("notes", JSON.stringify(notes));
    }

    const addNote = (title, desc,isImp) => {
    let sno;
    if (notes.length === 0) {
      sno = 1;
    }
    else {
      const max = notes.reduce(function(prev, current) {
    return (prev.sno > current.sno) ? prev : current
})
      sno = max.sno + 1;
    }
    const myNote = {
      sno: sno,
      title: title,
      desc: desc,
      isImp: isImp,
    }
    setNotes([...notes, myNote]);
  }

    const editNote = (note) => {
       setRedirect(Redirectop = true) ;
       setEditedNote(editedNote = Object.assign({}, note));
       onDelete(note);

    }

    const setRed = () => {
      setRedirect(Redirectop = false)
    }

    const markImp = (note) => {
      note.isImp = true;
      setTeller(teller = note.sno);
      localStorage.setItem("notes", JSON.stringify(notes));
    }

    const sortHelp = ( a , b ) => {
      if (a.isImp === true && b.isImp === false) return -1
      if (a.isImp === false && b.isImp === true) return 1
      return 0;
    }

    const sortHelp2 = (a , b) => {
      if (a.sno > b.sno) return -1
      if (a.sno < b.sno) return 1
    }

    const sortHelp3 = (a , b) => {
      if (a.sno > b.sno) return 1
      if (a.sno < b.sno) return -1
    }

  const radios = [
    { name: 'Sort By Importance', value: '1' },
    { name: 'Sort By New to Old', value: '2' },
    { name: 'Sort By Old to New', value: '3' },
  ];

  const [radioValue, setRadioValue] = useState('2');
  if(radioValue === '1') {
      setNotes(notes.sort(sortHelp));
      setRadioValue(0);
  }
  
  if(radioValue === '2') {
      setNotes(notes.sort(sortHelp2));
      setRadioValue(0);
  }

  if(radioValue === '3') {
      setNotes(notes.sort(sortHelp3));
      setRadioValue(0);
  }

  let myStyle = {
        margin: "auto 10px"
    }


     useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])
  if (Redirectop) {
    return( 
    <> 
    <Router>
      <Switch>
          <Route exact path="/user/editNote">

            <EditNote editedNote={editedNote} addNote={addNote} setRed = {setRed} /></Route> 
            
        </Switch>
        <Redirect to="/user/editNote" /> 
        
    </Router>
    </>
   
    );
  }

    return (
         <> 
    <Router>
      <Switch>
          <Route exact path="/user/home">
             <>
        <Header/>
      <div style={myStyle}>
       <ButtonGroup variant={'mx-3'}>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={'outline-primary'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
          </div>

            <Suspense fallback = {<div><LottieAnimation lotti={loading} height={300} width={300} loop={false} /></div>}>
            <Notes notes={notes} onDelete={onDelete} editNote={editNote} markImp={markImp} /> 
           </Suspense> 
             </>
          </Route>
          
          
          <Route exact path="/user/newNote">
             <>
        <Header/>
        <Suspense fallback = {<div><LottieAnimation lotti={loading} height={300} width={300} loop={false} /></div>}>
            <NewNote addNote={addNote} />
        </Suspense>    
            </>
          </Route>


          <Route exact path="/user/editNote">
             
           <>
        <Header/>
      <div style={myStyle}>
       <ButtonGroup variant={'mx-3'}>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={'outline-primary'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
          </div>

            <Suspense fallback = {<div><LottieAnimation lotti={loading} height={300} width={300} loop={false} /></div>}>
            <Notes notes={notes} onDelete={onDelete} editNote={editNote} markImp={markImp} /> 
           </Suspense> 
             </>
          </Route> 

        </Switch> 
    </Router>
    </>
    )
}