import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { clearCurrentToken } from './api'
import '../src/style.css';


import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useHistory
} from 'react-router-dom';

import {
    Home,
    Register,
    Login,
    Routines,
    MyRoutines
} from './components';


const App = () => {

    const history = useHistory();
//use states
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');


    return (
        <Router>

        <div className="app">
            <header className="fixedheader">
                <h1>Health Hub</h1>
                <nav>
                    <Link to='/'>Home </Link><p>|</p>
                    <Link to='/routines'>Fitness Routines</Link><p>|</p>
                    <Link to='/myroutines'>My Routines</Link><p>|</p>
                    <Link to='/activities'>Activities</Link><p>|</p>
                    <Link to='/register'>Register</Link><p>|</p>
                    <Link to='/login'>Login</Link><p>|</p>
                    <Link to='/' onClick={() => {
                        clearCurrentToken();
                        //need to get it to push to home page after logout
                        }}>Logout</Link>
                </nav>
            </header>
            <div className="headerspacer"></div>
            <main>
            <Switch>

                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/register'>
                    <Register username={username} setUsername={setUsername} password={password} setPassword={setPassword} 
                    confirmedPassword={confirmedPassword} setConfirmedPassword={setConfirmedPassword}/>
                </Route>

                <Route exact path='/login'>
                    <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} 
                    confirmedPassword={confirmedPassword} setConfirmedPassword={setConfirmedPassword}/>
                </Route>

                <Route exact path='/routines'>
                    <Routines />
                </Route>

                <Route exact path='/myroutines'>
                    <MyRoutines />
                </Route>


            </Switch>
            </main>
    </div>
    </Router>
    )
}


ReactDOM.render(
    <Router>
         <App />
    </Router>,
    document.getElementById('app'),
  )