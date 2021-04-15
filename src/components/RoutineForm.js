import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import { fetchUserRoutines } from '../api';


const RoutineForm = ({setIsOpen, open, setMyRoutines, currentUser}) => {

    const [routineName, setRoutineName] = useState('');
    const [routineGoal, setRoutineGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);


    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        formControl: {
          margin: theme.spacing(2),
          minWidth: 120,
        },
        textFields: {
            width: '300px',
            margin: theme.spacing(1)
          },
      }));

      const classes = useStyles();


      
const createRoutine = async ({ routineName, routineGoal, isPublic }) => {
  const token = localStorage.getItem('token');

  await fetch('https://fitnesstrac-kr.herokuapp.com/api/routines', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      name: routineName,
      goal: routineGoal,
      isPublic: isPublic
    })
  }).then(response => response.json())
    .then(result => {
      console.log(result);
      if(result.error) {
        alert('Sorry, that routine already exists. Please try again.')
      } else {
        alert('Your routine has been created!');
      }
    })
    .catch(console.error);
}



if(open === true) {
    return (
      <div className='routineform'>
        <form onSubmit={async (e) => {
          e.preventDefault();
          createRoutine({routineName, routineGoal, isPublic});
          const data = await fetchUserRoutines(currentUser);
          setMyRoutines(data);
          setRoutineName('');
          setRoutineGoal('');
          setIsPublic(false);
          setIsOpen(false);

        }} >
        <TextField 
          className={classes.textFields}
          id="outlined-basic" 
          label="Name" 
          variant="outlined" 
          size='small'
          required onChange={(e) => setRoutineName(e.target.value)} 
          value={routineName}/>
        <TextField 
         className={classes.textFields}
          id="outlined-basic" 
          label="Goal" 
          size='small'
          variant="outlined" 
          required onChange={(e) => setRoutineGoal(e.target.value)} 
          value={routineGoal}/>
          
        <label className='label'
        className={classes.textFields}>Allow others to see? </label>
          <Checkbox
            type='checkbox'
            size='small' 
            value={isPublic}
            color='primary' 
            onClick={() => setIsPublic(true)} />
  
          <Button className={classes.textFields}
            color='primary'
            variant="contained"
            type='submit'>Create Routine</Button>
          </form>

      </div>
    )}
    else return (
        <div></div>
    )
  }

export default RoutineForm;