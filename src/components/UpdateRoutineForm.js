import React from 'react';
import { useState } from 'react';
import { getCurrentToken, fetchUserRoutines } from '../api'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './style.css';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { createActivity } from './Activities';
import Checkbox from '@material-ui/core/Checkbox';


const UpdateRoutineForm = ({ currentUser, setMyRoutines, setIsRoutineOpen, routineOpen, routine }) => {

  const [routineName, setRoutineName] = useState('');
  const [routineGoal, setRoutineGoal] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  const updateRoutine = ({ routineName, routineGoal, isPublic }) => {
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
        if (result.error) {
          swal({
            title: 'Oops',
            text: 'That routine already exists. Please use another name.',
            icon: 'error'
          })
        } else {
          swal('Success', 'Your routine has been updated!', 'success');
        }
        console.log(result);
      })
      .catch(console.error);
  }

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',

    },
    textFields: {
      width: '250px',
      margin: theme.spacing(1),
    },
    textFields: {
      width: '250px',
      margin: theme.spacing(1)
    },
  }));

  const classes = useStyles();


  if (routineOpen === true) {
    return (
      <div className='updateRoutineForm'>
        <form onSubmit={async (e) => {
          e.preventDefault();
          updateRoutine({ routineName, routineGoal });
          const data = await fetchUserRoutines(currentUser);
          setMyRoutines(data);
          setRoutineName('');
          setRoutineGoal('');
          setIsRoutineOpen(false);

        }} >
          <TextField className={classes.textFields}
            onChange={(e) => setRoutineName(e.target.value)}
            value={routineName}
            size='small'
            variant="outlined"
            label='Name'
          />
          <TextField className={classes.textFields}
            onChange={(e) => setRoutineGoal(e.target.value)}
            label='Goal'
            value={routineGoal}
            size='small'
            variant="outlined" />

          <label className={classes.textFields}>Allow others to see? </label>
          <Checkbox
            value={isPublic}
            type='checkbox'
            color='primary' onClick={() => {
              if (isPublic === false) {
                setIsPublic(true)
              }
              else {
                setIsPublic(false)
              }
            }} />
          <Button className={classes.textFields}
            type='submit'
            color='primary'
            variant='contained'>Update Routine</Button>
        </form>
      </div>
    )
  }
  else return <div></div>;
}


export default UpdateRoutineForm;