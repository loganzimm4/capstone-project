import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import JediLogo from './JediLogo.png'


export default function Navbar2() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor: '#212121'}}>
        <Toolbar>
          <img src={JediLogo} alt='Jedi Logo' className='NavLogo'></img>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left'}}>
            Jedi Academy
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}