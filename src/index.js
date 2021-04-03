import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { clearCurrentToken, getCurrentToken } from './api'
import '../src/style.css';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import HomeIcon from '@material-ui/icons/Home';


import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useHistory,
    Redirect
} from 'react-router-dom';

import {
    Home,
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


return (
    <Router>
        <div className="app">
            
            <div className="headerspacer"></div>
            <main>
            <Switch>
                {/* <Route exact path='/home'>
                    <header className="fixedheader">
                    <nav>
                        <Link to='/routines'><FitnessCenterIcon/></Link>
                        <Link to='/myroutines'>My Routines</Link>
                        <Link to='/activities'><DirectionsRunIcon/></Link>
                        <Link to='/' onClick={() => {
                            clearCurrentToken();
                            //need to get it to push to home page after logout
                            }}>Logout</Link>
                    </nav>
                    </header>
                    <Home />
                </Route> */}

               <Route exact path='/'>
                    <div className='introbg'>
                        <h1 className='intro'>Welcome to Fitness Tracker</h1>
                        <nav className='intronav'>
                            <Link to='/publicroutines' ><FitnessCenterIcon className='textmiddle'/> </Link>
                            <Link to='/publicactivities' ><DirectionsRunIcon className='textmiddle' /> </Link>
                        </nav>
                    </div>
                        <Register username={username} setUsername={setUsername} password={password} setPassword={setPassword} 
                        confirmedPassword={confirmedPassword} setConfirmedPassword={setConfirmedPassword}/>
                </Route>

                <Route exact path='/publicroutines'>
                         <nav className='intronavtwo'>
                            <Link to='/' ><HomeIcon className='textmiddle'/> </Link>
                            <Link to='/publicroutines' ><FitnessCenterIcon className='textmiddle'/> </Link>
                            <Link to='/publicactivities' ><DirectionsRunIcon className='textmiddle' /> </Link>
                        </nav>
                    <Routines />
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
                    <MyRoutines />
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