import React, { PureComponent } from 'react';
import { getCurrentToken } from '../api';

class Home extends PureComponent {
  render() {

if(getCurrentToken()) {
  return <div id="title">
      <h1>Welcome back!</h1>
      <h2>Use the links above to navigate.</h2>
  </div>
  }

  else return <div id='title'>
      <h1>Welcome to Fitness Tracker!</h1>
      <h2>Find, create, and save fitness routines for a healthier lifestyle!</h2>
      <a href='/register'>Register for an account here</a>
  </div>
    }
}

export default Home;