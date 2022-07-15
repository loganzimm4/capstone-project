import React from 'react'
import {useEffect, useState} from 'react'
import MastersList from './MastersList'
import { CssBaseline, Typography } from '@mui/material'
import Navbar from './Navbar'
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Masters({currentUser, setCurrentUser}) {
    const [masters, setMasters] = useState([])

    useEffect(() => {
        fetch('/masters')
        .then(resp => resp.json())
        .then(data => setMasters(data))
    }, []);

    useEffect(() => {
      fetch('/me')
      .then(resp => {
        if (resp.ok) {
          resp.json().then((data) => setCurrentUser(data));
        }
      })}, []);

    const onUpdatedMaster = (updatedMaster) => {
      const filteredMasters = masters.filter(master => master.id !== updatedMaster.id)
      filteredMasters.push(updatedMaster)
      setMasters(filteredMasters)
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

  return (
    <div className='master'>
      <Navbar />
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <br />
        <Typography variant='h3' sx={{color: '#e0e0e0'}}> The Finest Masters In The Galaxy</Typography>
        <br />
        <MastersList classname='masters' masters={masters} onUpdatedMaster={onUpdatedMaster}/>
</ThemeProvider>
    </div>
  )
}

export default Masters