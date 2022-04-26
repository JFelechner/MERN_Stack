
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    Link
} from "react-router-dom";


const GameAchievements = () => {
    let [gameAchievementInfo, setGameAchievementInfo] = useState([])

    useEffect(() => {
        console.log("inside use effect")
        axios.get(`http://localhost:8000/api/game_achievements`)
            .then(res => {
                console.log("getting all game achievements -->", res)
                setGameAchievementInfo(res.data.results.achievements)
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
            {/* Game Achievements */}
            <ThemeProvider theme={theme}>
                <Box sx={{
                    '& > :not(style)': {
                        mt: 3
                    },
                }}>

                    <Item sx={{ backgroundColor: 'black', display: 'flex', alignItems:'center', justifyContent: 'space-between' }}>
                    <Typography
                    variant='h2'
                    sx={{ color: "primary.contrastText", marginLeft: 2 }}>
                        {gameAchievementInfo[0]?.titleAssociations[0].name}
                    </Typography>
                    <Typography
                    variant="dense"
                    sx={{ color: "primary.contrastText", marginRight: 2.5}}>
                        <Button sx={{ color: 'secondary.main' }} href="/dashboard">Dashboard</Button>
                    </Typography>

                    </Item>
                    
                    {
                        gameAchievementInfo.map((gach, i) => {
                            return (
                                <Item sx={{ backgroundColor: 'black', display: 'flex' }}>
                                    <Grid item xs={5}>
                                        <a href={gameAchievementInfo[i]?.mediaAssets[0].url} target="_blank"><img className='gameAchievementArt' src={gameAchievementInfo[i]?.mediaAssets[0].url} alt="" /></a>
                                        
                                    </Grid>
                                    <Grid item xs={7} sx={{ backgroundColor: 'primary.dark' }} >
                                        <Typography
                                            variant="h4"
                                            sx={{ color: "primary.contrastText", display: 'flex', marginTop: 3, marginLeft: 5 }}>
                                            {gameAchievementInfo[i]?.name}
                                            G{gameAchievementInfo[i]?.rewards[0].value}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            sx={{ color: "primary.contrastText", display: 'flex', marginLeft: 5 }}>
                                            {gameAchievementInfo[i]?.description}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{ color: "primary.contrastText", display: 'flex', marginLeft: 5 }}>
                                            {gameAchievementInfo[i]?.rarity.currentPercentage}% of gamers unlocked this
                                        </Typography>
                                    </Grid>
                                </Item>
                            )
                        })
                    }
                </Box>
            </ThemeProvider>
            )
        </>
    )
}

export default GameAchievements;