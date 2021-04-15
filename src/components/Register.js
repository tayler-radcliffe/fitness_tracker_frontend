import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { fetchUserRoutines, getCurrentToken, storeLoginToken } from '../api';
import '../components/register.css';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import { CropLandscapeOutlined } from '@material-ui/icons';



const Register = ({ currentUser, setCurrentUser, username, password, confirmedPassword, setUsername, setPassword, setConfirmedPassword, setMyRoutines }) => {

  const [token, setToken] = useState('');

  const registerUser = async (username, password) => {
    if (password !== confirmedPassword) {
      alert('Passwords must match')
    } else {
      await fetch('https://fitnesstrac-kr.herokuapp.com/api/users/register', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password
        })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
          if (result.error) {
            alert(result.message);
            setUsername('');
            setPassword('');
            setConfirmedPassword('');
          } else {
            console.log('This is your login token', result.token)
            setToken(result.token);
            storeLoginToken(result.token);
            setUsername('');
            setPassword('');
            setConfirmedPassword('');
          }
        })
        .catch(console.error);
    }
  };


  const handleClick = async (event) => {
    event.preventDefault();
    registerUser(username, password);
    setCurrentUser(username);
    const newRoutines = await fetchUserRoutines(currentUser);
    setMyRoutines(newRoutines);
  };


  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(2),
      minWidth: 120
    },
    textFields: {
      width: '250px',
      margin: theme.spacing(2),
      marginTop: '5px'
    },
  }));

  const classes = useStyles();

  if (token) {
    return <Redirect to='/myroutines' />
  }

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleClick}>
        <h2>Create an Account</h2>
        <FormControl variant="outlined" className={classes.formControl}>

          <TextField className={classes.textFields}
            type='text'
            value={username}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            label='Username'
            min='8' max='20' required
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField className={classes.textFields}
            type='password'
            value={password}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            label='Password'
            minLength="7"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField className={classes.textFields}
            type='password'
            value={confirmedPassword}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            label='Confirm Password'
            minLength="7"
            required
            onChange={(e) => setConfirmedPassword(e.target.value)}
          />
          <div className="register-button">
            <Button
              size='large'
              type='submit'
              color='primary'
              variant="contained"
            >Register</Button>

          </div>

          <Link to="/login" className="register-link">
            Already have an account? Sign in
                </Link>
        </FormControl>
      </form>
    </div>
  )
}


export default Register;