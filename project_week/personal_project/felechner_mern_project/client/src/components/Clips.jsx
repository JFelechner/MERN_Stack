

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Button, CardActionArea, CardActions } from '@mui/material';


const Clips = () => {

    let [clipList, setClipList] = useState([])

    useEffect(() => {
        console.log("inside use effect")
        axios.get(`http://localhost:8000/api/gameclips`)
            .then(res => {
                console.log("getting all clip info -->", res)
                setClipList(res.data.results.gameClips)
            })
            .catch(err => console.log("Error", err))

    }, [])



    return (
        <>
            {
                clipList.map((clip, i) => {
                    return (
                        <>
                            <Card sx={{ maxWidth: 450, marginBottom: 5 }}>
                                <CardActionArea>
                                    <Link href={clipList[i]?.gameClipUris[0].uri}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {clipList[i]?.titleName}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                            </Typography>
                                        </CardContent>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={clipList[i]?.thumbnails[1].uri}
                                            alt="green iguana"
                                        />
                                    </Link>
                                </CardActionArea>

                            </Card>

                        </>
                    )
                })
            }
        </>
    )

}
export default Clips;