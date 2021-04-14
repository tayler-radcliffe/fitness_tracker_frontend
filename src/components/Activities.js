import React, { useEffect, useState } from 'react';
import { fetchActivities, getCurrentToken } from '../api';
import Activity from './Activity';
import Button from '@material-ui/core/Button';
import AddActivityForm from './AddActivityForm';
import { makeStyles } from '@material-ui/core/styles';


export const createActivity = async ({activityName, activityDescription}) => {
    await fetch('https://fitnesstrac-kr.herokuapp.com/api/activities', {
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
    const [open, setIsOpen] = useState(false);

    useEffect(() => {
      Promise.all([fetchActivities()]).then(([data]) => {
        setActivities(data);
      });
    }, [])

    const showForm = () => {
      if (open === false){
           setIsOpen(true)}
      else {
          setIsOpen(false)
      }
  }

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      position: 'relative',
      margin: '10px',
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

  if(getCurrentToken()) {
    return (
      <div className='activities'>
         <h1>Activities</h1>
          <Button className={classes.container}
            onClick={showForm}
            color='secondary'
            variant='contained'>Create A New Activity</Button>
          <AddActivityForm open={open}/>
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