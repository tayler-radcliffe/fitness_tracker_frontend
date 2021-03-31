import React, { useEffect, useState } from 'react';
import Activity from './Activity';
import { getCurrentToken } from '../api'


function Routine ({routine}) {

    const [currentUser, setCurrentUser] = useState('');

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

if(routine.isPublic === true && currentUser === routine.creatorName) {
    return (
        <div class="routine-card">
            <h2 className="routine-title">{routine.name}</h2>
        <div className="routine-content">
            <h3><strong>Goal: </strong>{routine.goal}</h3>
            <h3><strong>Creator: </strong> {routine.creatorName}</h3>
            <h3><strong>Activities include:</strong></h3> 
            <h4>{routine.activities.map((activity, index) => <Activity key={index} activity={activity}/>)}</h4>
            <button>Edit Routine</button>
            <button>Add an Activity</button>
            <button>Remove an Activity</button>
            <button>Edit Activity</button>
            <button>Delete Entire Routine</button>
        </div>
    </div>
        )
    } 
    
    else return (
    <div class="routine-card">
        <h2 className="routine-title">{routine.name}</h2>
        <div className="routine-content">
        <h3><strong>Goal: </strong>{routine.goal}</h3>
        <h3><strong>Creator: </strong> {routine.creatorName}</h3>
        <h3><strong>Activities include:</strong></h3> 
        <h4>{routine.activities.map((activity, index) => <Activity key={index} activity={activity}/>)}</h4>
        </div>
    </div>
    )
}

export default Routine;