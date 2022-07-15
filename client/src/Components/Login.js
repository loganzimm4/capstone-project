import React, { useState } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import JediLogo from './JediLogo.png'
import { useNavigate } from 'react-router-dom';
import Navbar2 from './Navbar2';

function Copyright(props) {
  return (
    <Typography variant="body2" color="#e0e0e0" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Jedi Academy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

  

export default function SignIn({setCurrentUser}) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')

  const navigate = useNavigate();

  function handleLoginSubmit(e) {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    fetch('/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(resp => resp.json())
      .then((data) => {
        if (data.id) {
          setCurrentUser(data);
          navigate('/courses')
        } else {
          setErrors(data.error);
        }
      });
  }

  return (
    <> 
    <Navbar2 />
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={JediLogo} alt='Jedi Logo' className='LoginLogo'></img>
          <Typography component="h1" variant="h5" color="#212121">
            Login
          </Typography>
          <Box component="form" onSubmit={e => handleLoginSubmit(e)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            {errors ? 
            <Typography variant="body2" align="center" color="secondary">
            {errors}
          </Typography> : null}
          </Box>
          <br />
          <Typography variant="body2" align="center" color="secondary">
            New to the Jedi Academy? 
          </Typography>
          <Button variant="outlined" href="/Signup" sx={{color: "#ffff00"}}>Sign Up</Button>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </>
  );
}