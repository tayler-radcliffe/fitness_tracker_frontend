import React from 'react';
import { useEffect, useState } from 'react';
import { createRoutine } from './Routines'
import { fetchUsername, getCurrentToken, fetchUserRoutines } from '../api';
import MyRoutine from './MyRoutine';



const MyRoutines = () => {
  
    const [routines, setRoutines] = useState([]);
    const [creator, setCreator] = useState('');
    const [routineName, setRoutineName] = useState('');
    const [routineGoal, setRoutineGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const [currentUser, setCurrentUser] = useState('');

    useEffect(() => {
      fetchUsername()
      .then((data) => setCurrentUser(data.username))
    })

    useEffect(() => {
      fetchUserRoutines()
      .then((data) => setRoutines(data))
    })

   

  //  useEffect(() => {
  //   fetchUserRoutines(currentUser)
  //   .then((data) => console.log(data))
  // }, [])
  //unsure of how to get username inside url parameter???

    if(getCurrentToken()) {
    return (
        <div className='myRoutines-card'>
            <h1>My Routines</h1>
            <form onSubmit={e => {
              e.preventDefault();
              createRoutine({routineName, routineGoal, isPublic});
              alert('Your routine has been created!');
                //need to redirect to /myroutines
            }} >
            <label>Name: </label>
              <input type='text' required onChange={(e) => setRoutineName(e.target.value)} value={routineName} >
                </input>
            <label>Goal: </label>
              <input type='text' required onChange={(e) => setRoutineGoal(e.target.value)} value={routineGoal} >
                </input>
            <label>Allow others to see? </label>
              <input type='checkbox' value={isPublic} onClick={() => setIsPublic(true)} >
                </input>
              <button type='submit'>Create Routine</button>
            </form>
            {routines ? routines.map((routine, index) => 
            <MyRoutine creator={creator} setCreator={setCreator} key={index} routine={routine} />) : <h1>Use the form above to start creating routines.</h1>}
         </div>
    )} else return (
          <div className='myRoutines'>
          <h1>Please register or sign in to see your routines.</h1>
      </div>
    )
  }




export default MyRoutines;