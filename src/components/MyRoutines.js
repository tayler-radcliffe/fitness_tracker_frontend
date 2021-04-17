import React from 'react';
import { useEffect, useState } from 'react';
import { fetchUsername, getCurrentToken, fetchUserRoutines } from '../api';
import MyRoutine from './MyRoutine';
import Button from '@material-ui/core/Button';
import RoutineForm from './RoutineForm';
import { makeStyles } from '@material-ui/core/styles';


const MyRoutines = ({ currentUser }) => {

  const [myRoutines, setMyRoutines] = useState([]);
  const [creator, setCreator] = useState('');
  const [open, setIsOpen] = useState(false);

  useEffect(() => {
    Promise.all([fetchUserRoutines(currentUser)]).then(([data]) => {
      setMyRoutines(data)})
  }, [])



  const showForm = () => {
    if (open === false) {
      setIsOpen(true)
    }
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

if(currentUser) {
    return (
    <div className='routine-card'>
      <h1>Welcome, {currentUser}!</h1>
      <h2>Routines you've created:</h2>
      <Button
        className={classes.container}
        color="secondary"
        variant="contained"
        type="submit"
        onClick={showForm}>{open ? 'Hide' : 'Create A New Routine'}</Button>
      <RoutineForm setIsOpen={setIsOpen} currentUser={currentUser} setMyRoutines={setMyRoutines} open={open} />
      {myRoutines ? myRoutines.map((routine, index) =>
        <MyRoutine
          currentUser={currentUser}
          setMyRoutines={setMyRoutines}
          creator={creator}
          setCreator={setCreator}
          key={index}
          routine={routine} />)
        : <h1>Use the form above to start creating routines.</h1>}
    </div>
  )
} else return <div className='text'>Sign in to see your routines or sign up to start creating one.</div>

}


export default MyRoutines;