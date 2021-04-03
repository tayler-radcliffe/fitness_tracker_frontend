import React, { useEffect, useState } from 'react';
import { fetchRoutines, getCurrentToken, createRoutine } from '../api';
import Routine from './Routine';
import Button from '@material-ui/core/Button';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import RoutineForm from './RoutineForm';


const Routines = () => {

    const [routines, setRoutines] = useState([]);
    const [creator, setCreator] = useState('');
    const [open, setIsOpen] = useState(false);

    useEffect(() => {
        fetchRoutines()
        .then((data) => setRoutines(data))
        console.log(routines)
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
      <div>
        <h1>Fitness Routines</h1>
        <Button 
              color="secondary"
              variant="contained"
              type="submit"
              onClick={showForm}>Create A New Routine</Button>
                <RoutineForm routines={routines} open={open}/>
          {routines ? routines.map((routine, index) => 
          <Routine creator={creator} 
            setCreator={setCreator} 
            key={index} 
            routine={routine} /> ) : null }
      </div>
    )}
    else return (
        <div className='publicRoutines'>
            <h1>Fitness Routines</h1>
            {routines ? routines.map((routine, index) => 
            <Routine 
              creator={creator} 
              setCreator={setCreator} 
              key={index} routine={routine} /> ) : null }
         </div>
    )
}



export default Routines;