import React, { useState } from 'react';
import MyActivity from './MyActivity';
import { fetchUserRoutines, getCurrentToken } from '../api';
import AddAnActivityForm from './AddAnActivityForm';
import UpdateRoutineForm from './UpdateRoutineForm';
import Button from '@material-ui/core/Button';
import './style.css';


function MyRoutine({ currentUser, routine, setMyRoutines }) {

    const [open, setIsOpen] = useState(false);
    const [routineOpen, setIsRoutineOpen] = useState(false);

    const showForm = () => {
        if (open === false) {
            setIsOpen(true)
        }
        else {
            setIsOpen(false)
        }
    }

    const showRoutine = () => {
        if (routineOpen === false) {
            setIsRoutineOpen(true);
        }
        else {
            setIsRoutineOpen(false)
        }
    }


    const handleDelete = async () => {
        fetch(`https://fitnesstrac-kr.herokuapp.com/api/routines/${routine.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCurrentToken()}`
            }
        }).then(response => response.json())
            .then(async(result) => {
                console.log(result);
                alert('Your routine has been deleted.')
                const newRoutines = await fetchUserRoutines(currentUser);
                setMyRoutines(newRoutines);
            })
            .catch(console.error);
    }


    return (
        <div class="routine-card">
            <h2 className="routine-title">{routine.name}</h2>
            <div className="routine-content">
                <h3><strong>Goal: </strong>{routine.goal}</h3>
                <h3><strong>Creator: </strong> {routine.creatorName}</h3>
                <h3><strong>Activities include:</strong></h3>
                <h4>{routine.activities.map((activity, index) =>
                <MyActivity
                    currentUser={currentUser}
                    setMyRoutines={setMyRoutines}
                    routine={routine}
                    key={index}
                    activity={activity} />)}</h4>
                <Button
                    className='button'
                    color='secondary'
                    onClick={showForm}
                    variant="contained">
                    {open ? 'Hide' : 'Add an Activity'}</Button>
                <AddAnActivityForm
                    currentUser={currentUser}
                    setMyRoutines={setMyRoutines}
                    routine={routine}
                    setIsOpen={setIsOpen}
                    open={open} />
                <Button
                    className='button'
                    color='secondary'
                    variant="contained"
                    onClick={showRoutine}>
                    {routineOpen ? 'Hide' : 'Update Routine'}
                </Button>
                <UpdateRoutineForm
                    currentUser={currentUser}
                    setMyRoutines={setMyRoutines}
                    setIsRoutineOpen={setIsRoutineOpen}
                    setMyRoutines={setMyRoutines}
                    routineOpen={routineOpen}
                    routine={routine} />
                <Button
                    className='button'
                    color='secondary'
                    onClick={showForm}
                    variant="contained"
                    onClick={handleDelete}>Delete Entire Routine</Button>
                <h4>This routine is {routine.isPublic ? 'public.' : 'private.'}</h4>
            </div>
        </div>
    )
}

export default MyRoutine;
