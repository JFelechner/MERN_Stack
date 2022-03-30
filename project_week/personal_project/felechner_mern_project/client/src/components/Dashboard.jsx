

import React, { useState, useEffect } from 'react';
import Achievements from './Achievements';
import Friends from './Friends';
import axios from 'axios'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


const Dashboard = () => {
    let [profileInfo, setProfileInfo] = useState([])
    let [showAchievements, setShowAchievements] = useState()
    let [showFriends, setShowFriends] = useState()


    useEffect(() => {
        console.log("inside use effect")
        axios.get(`http://localhost:8000/api/profile`)
            .then(res => {
                console.log("getting all account info -->", res)
                setProfileInfo(res.data.results.profileUsers[0].settings)
            })
            .catch(err => console.log("Error", err))

    }, [])


    // MUI PAGE THEME
    const theme = createTheme({
        palette: {
            primary: {
                light: '#6d6d6d',
                main: '#424242',
                dark: '#1b1b1b',
                contrastText: '#ffffff',
            },
            secondary: {
                light: '#9cff57',
                main: '#64dd17',
                dark: '#1faa00',
                contrastText: '#000000',
            },
        },
    });

    // MUI GRID STYLING
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{
                    '& > :not(style)': {
                        mt: 2,
                    },
                }}>
                    <Grid container spacing={1}>
                        <Grid item xs={5}>

                            {/* left column */}
                            <Item sx={{ backgroundColor: 'primary.dark' }}>

                                {/* left column header */}
                                <Toolbar
                                    component="nav"
                                    variant="dense"
                                    sx={{ overflowX: 'auto', borderBottom: 1, borderColor: 'primary.light', display: 'flex', justifyContent: 'space-between' }}
                                >
                                    <Typography
                                        component="p"
                                        variant="p"
                                        sx={{ color: "primary.contrastText" }}
                                    >
                                        <img className='profileThumbNail me-2' src={profileInfo[0]?.value} alt="" />
                                        {profileInfo[2]?.value} - {profileInfo[3]?.value}
                                    </Typography>
                                    <Typography>
                                        <Button href="" sx={{ color: 'secondary.main' }}>logout</Button>
                                    </Typography>
                                </Toolbar>

                                {/* left column body */}
                                <Container sx={{ mt: 3 }}>
                                    <Typography
                                        component="h5"
                                        variant="h4"
                                        sx={{ display: 'flex', justifyContent: 'flex-start', color: "primary.contrastText" }}
                                    >
                                        {profileInfo[2]?.value}
                                    </Typography>
                                    <Typography
                                        component="p"
                                        variant="p"
                                        sx={{ display: 'flex', justifyContent: 'flex-start', mt: .5, color: "primary.contrastText" }}
                                    >
                                        {profileInfo[6]?.value}
                                    </Typography>
                                    <Typography>
                                        <img className='profilePicture me-2' src={profileInfo[0]?.value} alt="" />
                                    </Typography>
                                    <Typography
                                        component="p"
                                        variant="p"
                                        sx={{ mt: 1, display: 'flex', justifyContent: 'flex-start', color: "primary.contrastText" }}
                                    >
                                        {profileInfo[1]?.value} G
                                    </Typography>
                                    <Typography
                                        component="p"
                                        variant="p"
                                        sx={{ mt: 5, mb: 3, display: 'flex', color: "primary.contrastText", justifyContent: 'space-between' }}>
                                        <div>Bio: {profileInfo[7]?.value}</div>
                                        <div>Location: {profileInfo[8]?.value}</div>
                                    </Typography>

                                </Container>
                            </Item>
                        </Grid>

                        {/* ***************************************************************************************** */}

                        <Grid item xs={7}>

                            {/* right column */}
                            <Item sx={{ backgroundColor: 'primary.dark' }}>

                                {/* right column header */}
                                <Toolbar
                                    component="nav"
                                    variant="dense"
                                    sx={{ overflowX: 'auto', borderBottom: 1, borderColor: 'primary.light' }}
                                >
                                    <Typography
                                        component="p"
                                        variant="p"
                                        color="inherit"
                                        align="center"
                                        sx={{ flex: 1 }}
                                    >
                                        <Button onClick={setShowAchievements} href="" sx={{ color: 'secondary.main' }}>achievements</Button>
                                        <Button onClick={setShowFriends} href="" sx={{ color: 'secondary.main' }}>friends</Button>
                                        <Button href="" sx={{ color: 'secondary.main' }}>messages</Button>
                                    </Typography>
                                </Toolbar>

                                {/* right column body */}
                                <Container sx={{ mt: 2, p: .5, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }} >


                                    {
                                        showAchievements?
                                        <Achievements></Achievements>
                                        :
                                        showFriends?
                                        <Friends></Friends>
                                        :
                                        ""
                                    }
                                        



                                {/* Footer */}
                                {/* <Toolbar
                                    component="nav"
                                    variant="dense"
                                    sx={{ overflowX: 'auto' }}
                                >
                                    <Typography
                                        component="p"
                                        variant="p"
                                        color="inherit"
                                        align="center"
                                        sx={{ flex: 1 }}
                                    >
                                        <Button href="" sx={{ color: 'secondary.main' }}>See more</Button>
                                    </Typography>
                                </Toolbar> */}

                            </Container>
                        </Item>
                    </Grid>
                </Grid>
            </Box>

        </ThemeProvider>
        </>
    )
};


export default Dashboard;