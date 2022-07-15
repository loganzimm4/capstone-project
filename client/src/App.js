import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Courses from './Components/Courses';
import Login from './Components/Login'
import Masters from './Components/Masters';
import Signup from './Components/Signup';
import Home from './Components/Home';
import { useState } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState('')

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/'} element={<Home /> }/>
          <Route path={'/login'} element={<Login setCurrentUser={setCurrentUser}/> }/>
          <Route path={'/signup'} element={<Signup setCurrentUser={setCurrentUser}/>}/>
          <Route path={'/courses'} element={<Courses setCurrentUser={setCurrentUser}/>}/>
          <Route path={'/masters'} element={<Masters currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
