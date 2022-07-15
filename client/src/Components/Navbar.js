import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import JediLogo from './JediLogo.png'
import { useNavigate } from 'react-router-dom';


export default function Navbar({setCurrentUser}) {

  const navigate = useNavigate();

  function handleLogout(e) {
    fetch('/logout', {
      method: 'DELETE', 
    })
    .then(setCurrentUser(null))
    navigate('/login')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor: '#212121'}}>
        <Toolbar>
          <img src={JediLogo} alt='Jedi Logo' className='NavLogo'></img>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left'}}>
            Jedi Academy
          </Typography>
          <Button href='/masters' variant='outlined'>Masters</Button>
          <Button href='/courses' variant='outlined'>Courses</Button>
          <Button href='/login' sx={{color: '#fff'}} onClick={e => handleLogout(e)}> Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}