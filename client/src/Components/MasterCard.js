import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'

export default function MasterCard({master, onUpdatedMaster}) {

    const [masterName, setMasterName] = useState(master.name)
    const [masterAge, setMasterAge] = useState(master.age)
    const [masterMidichlorian, setMasterMidichlorian] = useState(master.midichlorian_count)
    const [isClicked, setIsClicked] = useState(false)

    function updateClick() {
        setIsClicked(isClicked => !isClicked)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const updatedMaster = {
            name: masterName,
            age: masterAge,
            midichlorian_count: masterMidichlorian
        }
        fetch(`/masters/${master.id}`, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(
                updatedMaster
            )
        })
        .then(resp => resp.json())
        .then(updatedMaster => {
          onUpdatedMaster(updatedMaster);
      })
        // .then(updatedMaster => setEditMaster(updatedMaster));
    }

  return (
    <Grid
      container
      spacing={0}
      direction='column'
      justify='center'
      alignItems='center'
      margin={3}
    >
      <Grid item>
        <Card variant='outlined' sx={{ width: 650, bgcolor: '#424242' }}>
          <CardContent>
            <Typography variant="h5" component="div" color='#00b0ff'>
              Master {master.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="#fff">
              Age: {master.age}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="#fff">
              Midichlorian Count: {master.midichlorian_count}
            </Typography>
            <Button onClick={updateClick}> Update Master</Button>
            {isClicked ? 
            <Box
              component='form'
              onSubmit={e => handleSubmit(e)}
              sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }, color: '#00b0ff',
                  }}
              noValidate
              autoComplete='off'
            >
              <TextField 
                  label="Name"
                  onChange={e => setMasterName(e.target.value)}
               />
                <TextField 
                  label="Age"
                  id='outlined-age-input'
                  onChange={e => setMasterAge(e.target.value)}
                />
                <TextField 
                  label="Midichlorian Count"
                  id='outlined-midichlorian-input'
                  onChange={e => setMasterMidichlorian(e.target.value)}
                />
                <Button type='submit' > Update! </Button>
            </Box> : null}
            </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
