import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import { createActivity } from './Activities'
import { fetchActivities } from '../api';


const AddActivityForm = ({ setIsOpen, open, setActivities }) => {

  const [activityName, setActivityName] = useState('');
  const [activityDescription, setActivityDescription] = useState('');

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



  if (open === true) {
    return (
      <div className='activity-form'>
        <form onSubmit={async (e) => {
          e.preventDefault();
          createActivity({ activityName, activityDescription });
          const data = await fetchActivities();
          setActivities(data);
          setActivityName('');
          setActivityDescription('');
          setIsOpen(false);
        }} >
          <TextField className={classes.textFields}
            label='Name'
            variant="outlined"
            size='small'
            required onChange={(e) => setActivityName(e.target.value)}
            value={activityName} />

          <TextField className={classes.textFields}
            label='Description'
            size='small'
            variant="outlined"
            required onChange={(e) => setActivityDescription(e.target.value)}
            value={activityDescription} />

          <Button className={classes.textFields}
            color='primary'
            variant="contained"
            type='submit'>Create Activity</Button>
        </form>
      </div>

    )
  } else return <div></div>;
}

export default AddActivityForm;