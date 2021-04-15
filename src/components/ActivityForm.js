import React, { useState } from 'react';
import { fetchUserRoutines, getCurrentToken } from '../api';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './style.css';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';


const ActivityForm = ({activity, open, setIsOpen, currentUser, setMyRoutines}) => {

    const [count, setCount] = useState('');
    const [duration, setDuration] = useState('');

const activityId = activity.routineActivityId;


const updateActivity = async ({count, duration}) => {
    await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routine_activities/${activityId}`, {
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
        if(result.error) {
          alert('Please use integer.')
        } else {
          alert('The activity has been updated.')
        }
    })
    .catch(console.error);
    }


    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
          position: 'relative',
          margin: '10px'
        },
        formControl: {
          margin: theme.spacing(2),
          minWidth: 120,
        },
        textFields: {
            width: '350px',
            margin: theme.spacing(2)
          },
      }));
  
      const classes = useStyles();

if(open === true) {
    return (
        <div>
        <FormControl className={classes.container}>  
          <form onSubmit={async (e) => {
            e.preventDefault();
            updateActivity({count, duration});
            const newRoutines = await fetchUserRoutines(currentUser);
            setMyRoutines(newRoutines);
            setDuration('');
            setCount('');
            setIsOpen(false);
                        

        }} >
        <TextField 
          label='Duration'
          variant="outlined" 
          size='small'
          onChange={(e) => setDuration(e.target.value)}/>
        <TextField 
          label='Count'
          size='small'
          variant="outlined" 
          onChange={(e) => setCount(e.target.value)}/>
        
          <Button 
            color='primary'
            variant="contained"
            type='submit'>Update Activity</Button>
          </form>
        </FormControl>
        </div>
    )}
    else return <div></div>;
}

export default ActivityForm;