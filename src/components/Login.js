import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { getCurrentToken, storeLoginToken } from '../api';
import './login.css'
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';


const Login = ({username, setUsername, password, setPassword, setCurrentUser}) => {

  const [token, setToken] = useState('');

  const loginUser = async (username, password) => {
    await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
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
        const token = result.token;
        console.log('This is your login token', token)
        setToken(token);
        storeLoginToken(token);
        setCurrentUser(result.user.username);
      })
      .catch(console.error);
  };

  const handleClick = (event) => {
      event.preventDefault();
      loginUser(username, password);
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


  if(token) {
    return <Redirect to = '/myroutines' /> }

    return (
    <div className="login-container">
        <form className="login-form" onSubmit={handleClick}>
        <h2>Login here</h2>
        <FormControl variant="outlined"  className={classes.formControl}>
                
                <TextField className={classes.textFields}
                     type='text' 
                     value={username}
                     variant="outlined"
                     InputLabelProps={{
                      shrink: true,
                    }} 
                     label='Username' 
                     min='8' max='20' required 
                     onChange={(e) => setUsername(e.target.value) }
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
                    onChange={(e) => setPassword(e.target.value) }
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