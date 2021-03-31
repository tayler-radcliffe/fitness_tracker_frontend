import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { storeLoginToken } from '../api';
import '../components/register.css';


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

    
    return (
        <div className="register-container">
        <form className="register-form" onSubmit={handleClick}>
            <h2>Register below:</h2>
            <label className="register-label">Create a Username</label>
            <br></br>
            <input type='text' value={username} placeholder='Username' min='8' max='20' required onChange={(e) => setUsername(e.target.value) }></input>
            <br></br>
            <label className="register-label">Create a Password</label>
            <br></br>
            <input type='password' value={password} placeholder='Password' min='8' max='20' required onChange={(e) => setPassword(e.target.value) }></input>
            <br></br>
            <label className="register-label">Confirm Your Password</label>
            <br></br>
            <input type='password' value={confirmedPassword} placeholder='Confirm Password' min='8' max='20' required onChange={(e) => setConfirmedPassword(e.target.value) }></input>
            <div className="register-button">
            <button type='submit'>Register</button>
            </div>
        </form>
        <a href='/login'>Already have an account? Sign in</a>
        </div>
    )
}



export default Register;