import React, { useEffect, useState } from 'react';
import Activity from './Activity';
import { getCurrentToken } from '../api';
import AddAnActivityForm from './AddAnActivityForm';
import UpdateRoutineForm from './UpdateRoutineForm';


function Routine ({routine}) {

    const [currentUser, setCurrentUser] = useState('');
    const [open, setIsOpen] = useState(false);
    const [routineOpen, setIsRoutineOpen] = useState(false);

    const showForm = () => {
        if (open === false){
             setIsOpen(true);}
        else {
            setIsOpen(false)
        }
    }

    const showRoutine = () => {
        if (routineOpen === false){
             setIsRoutineOpen(true);}
        else {
            setIsRoutineOpen(false)
        }
    }

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



    const handleDelete = () => {
        fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routine.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCurrentToken()}`
            }
        }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
    }
    

if(routine.isPublic === true && currentUser === routine.creatorName) {
    return (
        <div class="routine-card">
            <h2 className="routine-title">{routine.name}</h2>
        <div className="routine-content">
            <h3><strong>Goal: </strong>{routine.goal}</h3>
            <h3><strong>Creator: </strong> {routine.creatorName}</h3>
            <h3><strong>Activities include:</strong></h3> 
            <h4>{routine.activities.map((activity, index) => <Activity routine={routine} key={index} activity={activity}/>)}</h4>
            <button onClick={showForm}>{open ? 'Hide' : 'Add an Activity'}</button>
                <AddAnActivityForm routine={routine} open={open}/>
            <button onClick={showRoutine}>{routineOpen ? 'Hide' : 'Update Routine'}</button>
                <UpdateRoutineForm routineOpen={routineOpen} routine={routine}/>
            <button onClick={() => handleDelete}>Delete Entire Routine</button>
            <h4>This routine is {routine.isPublic ? 'public.' : 'private.'}</h4>
        </div>
    </div>
        )
    } else return (
    <div class="routine-card">
        <h2 className="routine-title">{routine.name}</h2>
        <div className="routine-content">
        <h3><strong>Goal: </strong>{routine.goal}</h3>
        <h3><strong>Creator: </strong> {routine.creatorName}</h3>
        <h3><strong>Activities include:</strong></h3> 
        <h4>{routine.activities.map((activity, index) => <Activity routine={routine} key={index} activity={activity}/>)}</h4>
        </div>
    </div>
    )
}

export default Routine;