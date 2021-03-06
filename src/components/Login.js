import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { fetchUserRoutines, getCurrentToken, storeLoginToken } from '../api';
import './login.css'
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import swal from 'sweetalert';


const Login = ({ username, setUsername, password, setPassword, setCurrentUser, setMyRoutines, currentUser }) => {

  const [token, setToken] = useState('');

  const loginUser = async (username, password) => {
    await fetch('https://fitnesstrac-kr.herokuapp.com/api/users/login', {
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
          swal({
            title: "Oops",
            text: result.message,
            icon: "error"
          });
          setUsername('');
          setPassword('');
        } else {
          const token = result.token;
          console.log('This is your login token', token)
          setToken(token);
          storeLoginToken(token);
          setUsername('');
          setPassword('');
          swal({
            title: "Welcome back!",
            text: "You're logged in!",
            icon: "success",
            button: false,
            timer: 2000
          });
        }
      })
      .catch(console.error);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    setCurrentUser(username);
    loginUser(username, password);
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
    <div className="login-container">
      <form className="login-form" onSubmit={handleClick}>
        <h2>Login here</h2>
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
            min='8' max='20' required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-button">
            <Button
              size='large'
              type='submit'
              color='primary'
              variant="contained"
              onClick={() => handleClick}>Login</Button>
          </div>

          <Link to="/" className='login-link'>Don't have an account? Sign Up</Link>
        </FormControl>
      </form>
    </div>
  )
}

export default Login;