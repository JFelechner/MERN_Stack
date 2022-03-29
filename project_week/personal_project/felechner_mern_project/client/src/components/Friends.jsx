

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';

const Friends = () => {

    let [friendsList, setFriendsList] = useState([])

    useEffect(() => {
        console.log("inside use effect")
        axios.get(`http://localhost:8000/api/friends`)
            .then(res => {
                console.log("getting all friends info -->", res)
                setFriendsList(res.data)
            })
            .catch(err => console.log("Error", err))

    }, [])

    return (

        <Card sx={{ maxWidth: 120, m: 1 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="120"
                    image=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                        egerg
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Gamerscore: 
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )

}
export default Friends;