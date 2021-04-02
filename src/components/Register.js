import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { storeLoginToken } from '../api';
import '../components/register.css';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';



const Register = ( { username, password, confirmedPassword, setUsername, setPassword, setConfirmedPassword}) => {

  const [token, setToken] = useState('');

    const registerUser = async (username, password) => {
      await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
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
          setToken(token);
          storeLoginToken(token);
        })
        .catch(console.error);
 };

 if(token) {
    return <Redirect to = '/' /> }

    const handleClick = (event) => {
        if(password !== confirmedPassword) {
          return alert('Passwords must match')
        } else {
        event.preventDefault();
        registerUser(username, password).then((data) => {
        })
    }
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


    
    return (
        <div className="register-container">
        <form className="register-form" onSubmit={handleClick}>
            <h2>Create an Account</h2>
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
                  
                    <TextField className={classes.textFields}
                       type='password' 
                       value={confirmedPassword}
                       variant="outlined"
                       InputLabelProps={{
                        shrink: true,
                      }} 
                       label='Confirm Password' 
                       min='8' max='20' required 
                       onChange={(e) => setConfirmedPassword(e.target.value) }
                    />
                <div className="register-button">
                <Button 
                  size='large'
                  type='submit'
                  color='primary'
                  variant="contained"
                >Register</Button>
               
                </div> 
                
              <a className='register-link' href='/login'>Already have an account? Sign in</a>
              </FormControl>
          </form>
        </div>    
      )
  }


export default Register;