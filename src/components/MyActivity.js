import React, { useState, useEffect } from "react";
import { fetchUsername, fetchUserRoutines, getCurrentToken } from '../api';
import ActivityForm from './ActivityForm';
import Button from '@material-ui/core/Button';

export default function MyActivity(props) {
    const {
        activity,
        currentUser,
        setMyRoutines
    } = props;

    const activityId = activity.routineActivityId;

    const [open, setIsOpen] = useState(false);

    const openForm = () => {
        if (open === false) {
            setIsOpen(true);
        }
        else {
            setIsOpen(false)
        }
    }

    const handleDelete = async () => {
        fetch(`https://fitnesstrac-kr.herokuapp.com/api/routine_activities/${activityId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCurrentToken()}`
            }
        }).then(response => response.json())
            .then(async (result) => {
                console.log(result);
                alert('Your activity has been deleted.')
                const newRoutines = await fetchUserRoutines(currentUser);
                setMyRoutines(newRoutines);
            })
            .catch(console.error);
    }

    if (getCurrentToken()) {
        return (
            <div class="activity-card">
                <h4>Name: {activity.name}</h4>
                <h4>Description: {activity.description}</h4>
                <h4>Duration: {activity.duration}</h4>
                <h4>Count: {activity.count}</h4>
                <Button
                    className='routine-button'
                    onClick={openForm}
                    className='editbutton'
                    color='secondary'
                    variant="contained" >{open ? 'Hide' : 'Update Activity'}</Button>
                <ActivityForm id='activityform'
                    currentUser={currentUser}
                    setMyRoutines={setMyRoutines}
                    activity={activity}
                    setIsOpen={setIsOpen}
                    open={open} />
                <Button
                    className='routine-button'
                    onClick={handleDelete}
                    className='editbutton'
                    color='secondary'
                    variant="contained">Delete Activity</Button>
            </div>
        )

    }
}
