import { Avatar, Box, Card, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { MovieProject } from '../models/models';

const MovieProjectCard = ({movieProject}:{movieProject:MovieProject}) => {
    return (
        <Link to={`/videos/${movieProject.id}`} style={{textDecoration:"none"}}>
            <Card sx={{ display: 'flex', width:"500px", flexDirection: 'column', padding:"12px"}}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:"space-between", width:"500px"}}>
                        <Typography component="div" variant="h5">
                            {movieProject.name}
                        </Typography>
                        <Typography component="div" variant="h6">
                            #{movieProject.id}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems:"center" }}>
                    <Avatar alt="Easy movie" src="/static/images/avatar/1.jpg" sx={{marginRight:"10px"}} />
                    <Typography component="div" variant="h6">
                        easy movie
                    </Typography>
                </Box>
            
            </Card>
        </Link>
    )
};

export default MovieProjectCard ;