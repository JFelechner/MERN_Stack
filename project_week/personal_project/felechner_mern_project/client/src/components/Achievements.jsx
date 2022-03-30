

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import {
    Link
} from "react-router-dom";

const Achievements = () => {
    
    let [achievementInfo, setAchievementInfo] = useState([])

    useEffect(() => {
        console.log("inside use effect")
        axios.get(`http://localhost:8000/api/achievements`)
            .then(res => {
                console.log("getting all achievement info -->", res)
                setAchievementInfo(res.data.results.titles)
            })
            .catch(err => console.log("Error", err))

    }, [])

    return (
        <>
            

                {/* Achievement Cards */}
                {/* Cards are surfaces that display content and actions on a single topic.
                                    They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy. */}
                {/* Often a card allow users to interact with the entirety of its surface to trigger its main action, be it an expansion, a link to another screen or some other behavior. The action area of the card can be specified by wrapping its contents in a CardActionArea component. */}

                {/* NEED TO ADD MAPPING FUNCTION FOR CARDS */}
                <Card sx={{ maxWidth: 120, m: 1 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="120"
                            image={achievementInfo[0]?.images[0].url}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                                {achievementInfo[0]?.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Gamerscore: {achievementInfo[0]?.achievement.currentGamerscore} of {achievementInfo[0]?.achievement.totalGamerscore}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 120, m: 1 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="120"
                            image={achievementInfo[1]?.images[2].url}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                                {achievementInfo[1]?.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Gamerscore: {achievementInfo[1]?.achievement.currentGamerscore} of {achievementInfo[1]?.achievement.totalGamerscore}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 120, m: 1 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="120"
                            image={achievementInfo[2]?.images[0].url}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                                {achievementInfo[2]?.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Gamerscore: {achievementInfo[2]?.achievement.currentGamerscore} of {achievementInfo[2]?.achievement.totalGamerscore}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 120, m: 1 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="120"
                            image={achievementInfo[3]?.images[0].url}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                                {achievementInfo[3]?.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Gamerscore: {achievementInfo[3]?.achievement.currentGamerscore} of {achievementInfo[3]?.achievement.totalGamerscore}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 120, m: 1 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="120"
                            image={achievementInfo[4]?.images[1].url}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                                {achievementInfo[4]?.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Gamerscore: {achievementInfo[4]?.achievement.currentGamerscore} of {achievementInfo[4]?.achievement.totalGamerscore}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 120, m: 1 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="120"
                            image={achievementInfo[10]?.images[1].url}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                                {achievementInfo[10]?.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Gamerscore: {achievementInfo[10]?.achievement.currentGamerscore} of {achievementInfo[10]?.achievement.totalGamerscore}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 120, m: 1 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="120"
                            image={achievementInfo[5]?.images[1].url}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                                {achievementInfo[5]?.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Gamerscore: {achievementInfo[5]?.achievement.currentGamerscore} of {achievementInfo[5]?.achievement.totalGamerscore}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 120, m: 1 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="120"
                            image={achievementInfo[14]?.images[1].url}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                                {achievementInfo[14]?.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Gamerscore: {achievementInfo[14]?.achievement.currentGamerscore} of {achievementInfo[14]?.achievement.totalGamerscore}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>



        </>
    )
}


export default Achievements;