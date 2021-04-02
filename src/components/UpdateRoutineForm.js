import React from 'react';
import { useState } from 'react';
import { getCurrentToken } from '../api'

const UpdateRoutineForm = ({routineOpen, routine}) => {

    const [routineName, setRoutineName] = useState('');
    const [routineGoal, setRoutineGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);

    const updateRoutine = ({routineName, routineGoal, isPublic}) => {
        fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routine.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCurrentToken()}`
              },
            body: JSON.stringify({
                name: routineName,
                goal: routineGoal,
                isPublic: isPublic
            })
            }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(console.error);
    }
    

if(routineOpen === true) {
    return (
        <div className='updateRoutineForm'>
            <form onSubmit={e => {
              e.preventDefault();
              updateRoutine({routineName, routineGoal});
              alert('Your routine has been updated!');
              //redirect/ refresh on click

            }} >
              <input type='text' placeholder='Update Name' required onChange={(e) => setRoutineName(e.target.value)} value={routineName} >
                </input>
              <input type='text' placeholder='Update Goal' required onChange={(e) => setRoutineGoal(e.target.value)} value={routineGoal} >
                </input>
            <label>Allow others to see? </label>
              <input type='checkbox' value={isPublic} onClick={() => {
                  if(isPublic === false){
                      setIsPublic(true)}
                      else 
                      setIsPublic(false)}} >
                </input>
              <button type='submit'>Update Routine</button>
            </form>
         </div>
    )} else return <div></div>;
}


export default UpdateRoutineForm;