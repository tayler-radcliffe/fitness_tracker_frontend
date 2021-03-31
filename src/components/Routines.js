import React, { useEffect, useState } from 'react';
import { fetchRoutines, getCurrentToken } from '../api';
import Routine from './Routine';



export const createRoutine = async ({routineName, routineGoal, isPublic}) => {
    await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCurrentToken()}`
          },
        body: JSON.stringify({
            name: routineName,
            goal: routineGoal,
            isPublic: true
      })
    }).then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(console.error);
}


const Routines = () => {

    const [routines, setRoutines] = useState([]);
    const [creator, setCreator] = useState('');
    const [routineName, setRoutineName] = useState('');
    const [routineGoal, setRoutineGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);

    useEffect(() => {
        fetchRoutines()
        .then((data) => setRoutines(data))
        console.log(routines)
    }, [])
  
    if(getCurrentToken()) {
    return (
        <div className='publicRoutines'>
            <h1>Fitness Routines</h1>
            <form onSubmit={e => {
              e.preventDefault();
              createRoutine({routineName, routineGoal, isPublic});
              alert('Your post has been created!');

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
              <button type='submit'>Create Post</button>
            </form>
            {routines ? routines.map((routine, index) => <Routine creator={creator} setCreator={setCreator} key={index} routine={routine} /> ) : null }
         </div>
    )}
    else return (
        <div className='publicRoutines'>
            <h1>Fitness Routines</h1>
            {routines ? routines.map((routine, index) => <Routine creator={creator} setCreator={setCreator} key={index} routine={routine} /> ) : null }
         </div>
    )
}



export default Routines;