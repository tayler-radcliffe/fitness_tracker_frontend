import React from 'react';
import { useEffect, useState } from 'react';
import { fetchUsername, getCurrentToken, fetchUserRoutines } from '../api';
import MyRoutine from './MyRoutine';
import Button from '@material-ui/core/Button';
import RoutineForm from './RoutineForm';
import { makeStyles } from '@material-ui/core/styles';


const MyRoutines = () => {
  
    const [myRoutines, setMyRoutines] = useState([]);
    const [creator, setCreator] = useState('');
    const [currentUser, setCurrentUser] = useState('');
    const [open, setIsOpen] = useState(false);

    // useEffect(() => {
    //   fetchUsername()
    //   .then((data) => setCurrentUser(data.username))
    //   fetchUserRoutines(currentUser)
    //   .then((data) => setMyRoutines(data))
    // })

    fetchUserRoutines(currentUser)
      .then((data) => setMyRoutines(data))

    console.log(currentUser)      
     
    console.log(myRoutines)

   
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
    <div>
      <h1>My Routines</h1>
           <Button className={classes.container}
              color="secondary"
              variant="contained"
              type="submit"
              onClick={showForm}>Create A New Routine</Button>
                <RoutineForm myRoutines={myRoutines} open={open}/>
            {myRoutines ? myRoutines.map((routine, index) => 
            <MyRoutine 
              creator={creator} 
              setCreator={setCreator} 
              key={index} routine={routine} />) 
              : <h1>Use the form above to start creating routines.</h1>}
         </div>
    )} else return (
          <div className='myRoutines'>
          <h1>Please register or sign in to see your routines.</h1>
      </div>
    )
  }


export default MyRoutines;