
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
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

    return (
        <>
            {/* Game Achievements */}
            
            {
                gameAchievementInfo.map((gach, i) => {
                    return (
                        <Card sx={{ maxWidth: 120, m: 1 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="120"
                                    image={gameAchievementInfo[i]?.mediaAssets[0].url}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="div">
                                        sdfbhhdf
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Gamerscore:
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })
            }
            )
        </>
    )
}

export default GameAchievements;