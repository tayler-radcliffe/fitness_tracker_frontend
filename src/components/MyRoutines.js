import React from 'react';
import { useEffect, useState } from 'react';
import { createRoutine } from './Routines'
import { fetchUsername, getCurrentToken, fetchUserRoutines } from '../api';
import MyRoutine from './MyRoutine';
import Button from '@material-ui/core/Button';
import RoutineForm from './RoutineForm';


const MyRoutines = () => {
  
    const [routines, setRoutines] = useState([]);
    const [creator, setCreator] = useState('');
    const [routineName, setRoutineName] = useState('');
    const [routineGoal, setRoutineGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const [currentUser, setCurrentUser] = useState('');
    const [open, setIsOpen] = useState(false);

    useEffect(() => {
      fetchUsername()
      .then((data) => setCurrentUser(data.username))
    })

    useEffect(() => {
      fetchUserRoutines()
      .then((data) => setRoutines(data))
    })

   
    const showForm = () => {
        if (open === false){
             setIsOpen(true)}
        else {
            setIsOpen(false)
        }
    }

  //  useEffect(() => {
  //   fetchUserRoutines(currentUser)
  //   .then((data) => console.log(data))
  // }, [])
  //unsure of how to get username inside url parameter???

  if(getCurrentToken()) {
    return (
    <div>
      <h1>My Routines</h1>
           <Button 
              color="secondary"
              variant="contained"
              type="submit"
              onClick={showForm}>Create A New Routine</Button>
                <RoutineForm routines={routines} open={open}/>
            {routines ? routines.map((routine, index) => 
            <MyRoutine 
              creator={creator} 
              setCreator={setCreator} 
              key={index} routine={routine} />) 
              : <h1>Use the form above to start creating routines.</h1>}
         </div>
    )} else return (
          <div className='myRoutines'>
          <h1>Please register or sign in to see your routines.</h1>
      </div>
    )
  }


export default MyRoutines;