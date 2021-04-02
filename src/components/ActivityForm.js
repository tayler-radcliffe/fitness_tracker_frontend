import React, { useState } from 'react';
import { getCurrentToken } from '../api';

const ActivityForm = ({activity, open, setIsOpen}) => {

    const [count, setCount] = useState('');
    const [duration, setDuration] = useState('');

const activityId = activity.routineActivityId;


const updateActivity = async ({count, duration}) => {
    await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routine_activities/${activityId}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCurrentToken()}`
          },
        body: JSON.stringify({
            count: count,
            duration: duration
        })
    }).then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(console.error);
    }


if(open === true) {
    return (
        <div>
        <form onSubmit={e => {
            e.preventDefault();
            updateActivity({count, duration});
            alert('Activity has been updated.');
            //redirect/refresh page without refreshing

         }}>
            <input type='text' placeholder='Update Duration' onChange={(e) => setDuration(e.target.value)}></input>
            <input type='text' placeholder='Update Count' onChange={(e) => setCount(e.target.value)}></input>
            <input type='submit'></input>
        </form>
        </div>
    )}
    else return <div></div>;
}

export default ActivityForm;