import React from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send'
import JediLogo from './JediLogo.png'
import Navbar2 from './Navbar2';

const theme = createTheme({
    palette: {
      primary: {
        main: '#00b0ff',
      },
      secondary: {
        main: '#00b0ff',
      },
      background: {
        default: '#636363'
      },
    },
  });

function Home() {

  return (
    <> 
    <Navbar2 />
    <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <Typography variant='h2'>
            </Typography>
            <img src={JediLogo} alt='Jedi Logo' className='HomeLogo'></img>
            <br />
            <br />
            <Typography variant='h3' sx={{color: '#e0e0e0'}}>
              Welcome to <br />
              The Jedi Academy
            </Typography>
            <br />
            <br />
            <Button variant='outlined' href='/login' sx={{color: '#ffff00'}} endIcon={<SendIcon />}> Enter </Button>
        </Container>
    </ThemeProvider>
    </>
  )
}

export default Home