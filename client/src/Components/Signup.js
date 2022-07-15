import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BlurOn from '@mui/icons-material/BlurOn';
import Navbar2 from './Navbar2';
import { useNavigate } from 'react-router-dom';


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

export default function SignUp({setCurrentUser}) {

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [midichlorianCount, setMidichlorianCount] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')

  const navigate = useNavigate();

  function handleSignupSubmit(e) {
    e.preventDefault();
    const user = {
      name: name,
      age: age,
      midichlorian_count: midichlorianCount,
      username: username,
      password: password,
    };
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then(setCurrentUser);
        navigate('/courses');
      } else {
        res.json().then((data) => {
          setErrors(data.errors);
        });
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
          <Avatar alt="Jedi Academy Logo" sx={{bgcolor: '#636363'}}>
            <BlurOn sx={{color: '#00b0ff'}}/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={e => handleSignupSubmit(e)} sx={{ mt: 3 }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="name"
                  name="Name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={e => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  autoComplete="age"
                  type="number"
                  onChange={e => setAge(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="midichlorians"
                  label="Midichlorian Count"
                  name="midichlorian"
                  autoComplete="midichlorian"
                  type="number"
                  onChange={e => setMidichlorianCount(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="Username"
                  autoComplete="Username"
                  onChange={e => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={e => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <br />
            {errors ? <Typography variant='body2' align='center' color='#00b0ff'>{errors}</Typography>: null}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography variant="body2" align="center" color="#00b0ff">
                  Already have an account? 
                </Typography>
                <br />
                <Button variant="outlined" href="/login" sx={{color: '#ffff00'}}>Login</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </>
  );
}