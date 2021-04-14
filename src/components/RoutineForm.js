import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import { createRoutine, fetchUserRoutines } from '../api';


const RoutineForm = ({open, setMyRoutines}) => {

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


if(open === true) {
    return (
      <div className='routineform'>
        <form onSubmit={async (e) => {
          e.preventDefault();
          createRoutine({routineName, routineGoal, isPublic});
          alert('Your routine has been created!');
          const myRoutines = await fetchUserRoutines();
          setMyRoutines(myRoutines);
    
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