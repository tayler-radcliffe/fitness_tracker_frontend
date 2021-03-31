import React from 'react';
import { useEffect, useState } from 'react';
import { createRoutine } from './Routines'
import { getCurrentToken } from '../api';
import Routine from './Routine';
import { fetchRoutines } from '../api';

const MyRoutines = () => {

    const [routines, setRoutines] = useState([]);
    const [creator, setCreator] = useState('');
    const [routineName, setRoutineName] = useState('');
    const [routineGoal, setRoutineGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const [currentUser, setCurrentUser] = useState('');

    useEffect(() => {
        fetchRoutines()
        .then((data) => setRoutines(data))
        console.log(routines)
    }, [])


    useEffect(() => {
        fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCurrentToken()}`
            },
        }).then(response => response.json())
            .then(result => {
            setCurrentUser(result.username);
            })
            .catch(console.error);
        })

    return (
        <div className='myRoutines'>
            <h1>My Routines</h1>
            <form onSubmit={e => {
              e.preventDefault();
              createRoutine({routineName, routineGoal, isPublic});
              alert('Your post has been created!');
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
              <button type='submit'>Create Post</button>
            </form>
            {routines ? routines.filter(routine => routine.creatorName === currentUser).map((routine, index) =>
            <Routine creator={creator} setCreator={setCreator} key={index} routine={routine} />) : null}
         </div>
    )}




export default MyRoutines;