import React, { useEffect, useState } from 'react';
import { fetchActivites, getCurrentToken } from '../api';
import Activity from './Activity';


export const createActivity = async ({activityName, activityDescription}) => {
    await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCurrentToken()}`
          },
        body: JSON.stringify({
            name: activityName,
            description: activityDescription
      })
    }).then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(console.error);
}


const Activities = () => {

    const [activities, setActivities] = useState([]);
    const [creator, setCreator] = useState('');
    const [activityName, setActivityName] = useState('');
    const [activityDescription, setActivityDescription] = useState('');

    useEffect(() => {
        fetchActivites()
        .then((data) => setActivities(data))
        console.log(activities)
    }, [])


    if(getCurrentToken()) {
    return (
        <div className='activities'>
            <h1>Activities</h1>
            <form onSubmit={e => {
              e.preventDefault();
              createActivity({activityName, activityDescription});
              alert('Your activity has been created!');
              //redirect/refresh page without refreshing

            }} >
            <label>Name: </label>
              <input type='text' required onChange={(e) => setActivityName(e.target.value)} value={activityName} >
                </input>
            <label>Goal: </label>
              <input type='text' required onChange={(e) => setActivityDescription(e.target.value)} value={activityDescription} >
                </input>
              <button type='submit'>Create Activity</button>
            </form>
            {activities ? activities.map((activity, index) => <Activity creator={creator} setCreator={setCreator} key={index} activity={activity} /> ) : null }
         </div>
    )} else {
        return (
            <div className='activities'>
            <h1>Activities</h1>
            {activities ? activities.map((activity, index) => <Activity creator={creator} setCreator={setCreator} key={index} activity={activity} /> ) : null }
         </div>

        )
    }
}


export default Activities;