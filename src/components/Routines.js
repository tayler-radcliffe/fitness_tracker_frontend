import React, { useEffect, useState } from 'react';
import { fetchRoutines, getCurrentToken, createRoutine } from '../api';
import Routine from './Routine';
import Button from '@material-ui/core/Button';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import RoutineForm from './RoutineForm';


const Routines = ({currentUser, setCurrentUser}) => {

    const [routines, setRoutines] = useState([]);
    const [creator, setCreator] = useState('');
    const [open, setIsOpen] = useState(false);

    useEffect(() => {
      Promise.all([fetchRoutines()]).then(([data]) => {
        setRoutines(data);
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
      <div className='routine-card'>
        <h1>Fitness Routines</h1>
        <Button 
              className={classes.container}
              color="secondary"
              variant="contained"
              type="submit"
              onClick={showForm}>Create A New Routine</Button>
                <RoutineForm routines={routines} open={open}/>
          {routines ? routines.map((routine, index) => 
          <Routine currentUser={currentUser} setCurrentUser={setCurrentUser} creator={creator} 
            setCreator={setCreator} 
            key={index} 
            routine={routine} /> ) : null }
      </div>
    )}
    else return (
        <div className='publicRoutines'>
            <h1>Fitness Routines</h1>
            {routines ? routines.map((routine, index) => 
            <Routine currentUser={currentUser} setCurrentUser={setCurrentUser}
              creator={creator} 
              setCreator={setCreator} 
              key={index} routine={routine} /> ) : null }
         </div>
    )
}



export default Routines;