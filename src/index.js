import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { clearCurrentToken, getCurrentToken, fetchUsername } from './api'
import '../src/style.css';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import HomeIcon from '@material-ui/icons/Home';


import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useHistory
} from 'react-router-dom';

import {
    Register,
    Login,
    Routines,
    MyRoutines,
    Activities
} from './components';


const App = () => {

    const history = useHistory();

//use states
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [currentUser, setCurrentUser] = useState('');

    useEffect(() => {
        Promise.all([fetchUsername()]).then(([data]) => {
            setCurrentUser(data.username);
          });
    }, []);

    console.log(currentUser)


return (
    <Router>
        <div className="app">
            
            <div className="headerspacer"></div>
            <main>
            <Switch>
         
               <Route exact path='/'>
                    <div className='introbg'>
                        <h1 className='intro'>Welcome to Fitness Tracker</h1>
                        <nav className='intronav'>
                            <Link to='/publicroutines' ><FitnessCenterIcon className='textmiddle'/> </Link>
                            <Link to='/publicactivities' ><DirectionsRunIcon className='textmiddle' /> </Link>
                        </nav>
                    </div>
                        <Register setCurrentUser={setCurrentUser} username={username} setUsername={setUsername} password={password} setPassword={setPassword} 
                        confirmedPassword={confirmedPassword} setConfirmedPassword={setConfirmedPassword}/>
                </Route>

                <Route exact path='/publicroutines'>
                         <nav className='intronavtwo'>
                            <Link to='/' ><HomeIcon className='textmiddle'/> </Link>
                            <Link to='/publicroutines' ><FitnessCenterIcon className='textmiddle'/> </Link>
                            <Link to='/publicactivities' ><DirectionsRunIcon className='textmiddle' /> </Link>
                        </nav>
                    <Routines setCurrentUser={setCurrentUser} currentUser={currentUser}/>
                </Route>
                
                <Route exact path='/publicactivities'>
                     <nav className='intronavtwo'>
                            <Link to='/' ><HomeIcon className='textmiddle'/> </Link>
                            <Link to='/publicroutines' ><FitnessCenterIcon className='textmiddle'/> </Link>
                            <Link to='/publicactivities' ><DirectionsRunIcon className='textmiddle' /> </Link>
                    </nav>
                    <Activities />
                </Route>  

                <Route exact path='/myroutines'>
                    <header className='authorizedheader'>
                    <h1>Fitness Tracker</h1>
                        <nav className='authorizednav'>
                                <Link to='/myroutines' ><HomeIcon className='textmiddle'/> </Link>
                                <Link to='/routines' ><FitnessCenterIcon className='textmiddle'/> </Link>
                                <Link to='/activities' ><DirectionsRunIcon className='textmiddle' /> </Link>
                                <Link to='/' onClick={() => {
                                clearCurrentToken();
                                //need to get it to push to home page after logout
                                }}>Logout</Link>
                        </nav>
                    </header>
                    <div class="spacer"></div>
                    <MyRoutines setCurrentUser={setCurrentUser} currentUser={currentUser}/>
                </Route>

                <Route exact path='/routines'>
                    <header className='authorizedheader'>
                        <h1>Fitness Tracker</h1>
                        <nav className='authorizednav'>
                                <Link to='/myroutines' ><HomeIcon className='textmiddle'/> </Link>
                                <Link to='/routines' ><FitnessCenterIcon className='textmiddle'/> </Link>
                                <Link to='/activities' ><DirectionsRunIcon className='textmiddle' /> </Link>
                                <Link to='/' onClick={() => {
                                clearCurrentToken();
                                //need to get it to push to home page after logout
                                }}>Logout</Link>
                        </nav>
                    </header>
                    <div class="spacer"></div>
                    <Routines/>

                </Route>

                <Route exact path='/activities'>
                    <header className='authorizedheader'>
                        <h1>Fitness Tracker</h1>
                        <nav className='authorizednav'>
                                <Link to='/myroutines' ><HomeIcon className='textmiddle'/> </Link>
                                <Link to='/routines' ><FitnessCenterIcon className='textmiddle'/> </Link>
                                <Link to='/activities' ><DirectionsRunIcon className='textmiddle' /> </Link>
                                <Link to='/' onClick={() => {
                                clearCurrentToken();
                                //need to get it to push to home page after logout
                                }}>Logout</Link>
                        </nav>
                    </header>
                    <div class="spacer"></div>
                    <Activities/>
                </Route>  

                <Route exact path='/login'>
                    <div className='introbg'>
                    <h1 className='intro'>Welcome to Fitness Tracker</h1>
                        <nav className='intronav'>
                            <Link to='/publicroutines' ><FitnessCenterIcon className='textmiddle'/> </Link>
                            <Link to='/publicactivities' ><DirectionsRunIcon className='textmiddle' /> </Link>
                        </nav>
                        <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} 
                        confirmedPassword={confirmedPassword} setConfirmedPassword={setConfirmedPassword} setCurrentUser={setCurrentUser}/>
                    </div>
                </Route>

            </Switch>
            </main>
        </div>
    </Router>
)}
  


ReactDOM.render(
    <Router>
         <App />
    </Router>,
    document.getElementById('app'),
  )