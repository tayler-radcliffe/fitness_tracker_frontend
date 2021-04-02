import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { getCurrentToken, storeLoginToken } from '../api';
import './login.css'

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

  if(token) {
    return <Redirect to = '/myroutines' /> }

    return (
    <div className="login-container">
        <form className="login-form" onSubmit={handleClick}>
        <h2>Login here</h2>
            <label className="login-label">Username</label>
            <br></br>
            <input type='text' value={username} placeholder='Username' min='8' max='20' required onChange={(e) => setUsername(e.target.value) }></input>
            <br></br>
            <label className="login-label">Password</label>
            <br></br>
            <input type='password' value={password} placeholder='Password' min='8' max='20' required onChange={(e) => setPassword(e.target.value) }></input>
            <div className="login-button">
            <button type='submit'>Login</button>
            </div>
            <a href='/'>Don't have an account? Sign up</a>
        </form>
    </div>
    )
}

export default Login;