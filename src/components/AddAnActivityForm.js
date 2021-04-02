import React, { useState, useEffect } from 'react';
import { fetchActivites, getCurrentToken } from '../api';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';



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
            width: '350px',
            margin: theme.spacing(2)
          },
      }));

      const classes = useStyles();


if(open === true) {
        return (
                <form onSubmit={e => {
                    e.preventDefault();
                    addActivity({activity, count, duration});
                    alert('Your activity was added.');
                }}>
                <FormControl variant="outlined"  className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Activity</InputLabel>
                    <Select
                        label="Choose an Activity<"
                        id="demo-simple-select-outlined"
                        value={activity} 
                        label="activity"
                        onChange={event => {setActivity(event.target.value)}}>
                        {activities.map((activity, idx) => { 
                            return <MenuItem key={idx} value={activity.id}>{activity.name}</MenuItem>
                        })}
                
                    </Select>
                    <TextField
                        className={classes.textFields}
                        id="outlined-helperText"
                        label="Count"
                        defaultValue=""
                        variant="outlined"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                    />
                    <TextField
                        className={classes.textFields}
                        id="outlined-helperText"
                        label="Duration"
                        defaultValue=""
                        variant="outlined"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
             
                <Button type='submit'>Add Activity</Button> 
                </FormControl>
            </form>
        )
    } else return <div></div>;
}

export default AddAnActivityForm;