import React, { useState, useEffect } from 'react';
import { fetchActivites, getCurrentToken } from '../api';


const AddAnActivityForm = ({open, setIsOpen, routine}) => {

    const [activities, setActivities] = useState([]);
    const [activity, setActivity] = useState('');
    const [duration, setDuration] = useState('');
    const [count, setCount] = useState('');

    const addActivity = ({activity, count, duration}) => {
        fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routine.id}/activities`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCurrentToken()}`
              },
            body: JSON.stringify({
                activityId: activity,
                count: count, 
                duration: duration
            })
    }).then(response => response.json())
      .then(result => {
        console.log(result);
      })
      .catch(console.error);
    }


    useEffect(() => {
        fetchActivites()
        .then((data) => setActivities(data))
    })


if(open === true) {
        return (
                <form onSubmit={e => {
                    e.preventDefault();
                    addActivity({activity, count, duration});
                    alert('Your activity was added.');
                }}>
                <label htmlFor="select-activity">Activity</label>
                <select 
                    name="activity" 
                    id="select-activity"
                    value={activity} 
                    onChange={event => {
                        setActivity(event.target.value);
                        }}>
                    {activities.map((activity, idx) => { 
                        return <option key={idx} value={activity.id}>{activity.name}</option>
                    })}
                </select>
                <input type='text' placeholder='Count' onChange={(e) => setCount(e.target.value)}></input>
                <input type='text' placeholder='Duration' onChange={(e) => setDuration(e.target.value)}></input>
                <input type='submit'></input>
            </form>
        )
    } else return <div></div>;
}

export default AddAnActivityForm;