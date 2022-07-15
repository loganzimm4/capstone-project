import React, {useState} from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

function CourseCard({course, filteredDeletedCourse, onUpdatedCourse}) {

    const [isClicked, setIsClicked] = useState(false)
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [time, setTime] = useState()

    function updateClick() {
        setIsClicked(isClicked => !isClicked)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const updatedCourse = {
            name: name,
            location: location,
            time: time
        }
        fetch(`/courses/${course.id}`, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(
                updatedCourse
            )
        })
        .then(resp => resp.json())
        .then(updatedCourse => onUpdatedCourse(updatedCourse));
    }

    function handleDelete() {
            fetch(`/courses/${course.id}`, {
                method: 'DELETE',
            }).then(resp => resp.json())
                .then(json => console.log(json));
                filteredDeletedCourse(course.id)
    }

  return (
    <Grid 
    container
    spacing={0}
    direction='column'
    justify='center'
    alignItems='center'
    marginBottom={3}
    marginRight={5}
    >
        <Grid item xs={3}>
            <Card variant='outlined' sx={{width: 650, bgcolor: '#424242' }}>
                <CardContent>
                    <Typography variant="h5" component="div" color='#00b0ff'>
                        {course.name}
                    </Typography>
                     <br />
                    <Typography sx={{ mb: 1.5 }} color="#fff">
                        Location: {course.location}
                    </Typography>
                    <br />
                    <Typography sx={{ mb: 1.5 }} color="#fff">
                        Time: {course.time}
                    </Typography>
                    
                    <Button onClick={updateClick}> Update Course </Button> <Button onClick={handleDelete}>Delete Course</Button>
                    { isClicked ? 
                    <Box
                    component='form'
                    onSubmit={e => handleSubmit(e)}
                    sx={{
                          '& .MuiTextField-root': { m: 1, width: '25ch' }, color: '#00b0ff'
                        }}
                    noValidate
                    autoComplete='off'
                  >
                    <TextField 
                        label="Name"
                        id='outlined-name-input'
                        onChange={e => setName(e.target.value)}
                     />
                      <TextField 
                        label="Location"
                        id='outlined-age-input'
                        onChange={e => setLocation(e.target.value)}
                      />
                      <TextField 
                        label="Time"
                        id='outlined-midichlorian-input'
                        onChange={e => setTime(e.target.value)}
                      />
                      <Button type='submit' > Update! </Button> 
                    </Box>
                    : null}
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  )
}

export default CourseCard