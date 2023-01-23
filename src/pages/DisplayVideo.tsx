import { Box } from '@mui/material';
import React from 'react';
import MovieProjectCard from '../components/MovieProjectCard';
import Title from '../components/Title';
import { MovieProject } from '../models/models';
import MovieProjectsData from "./../data/MovieProjectsData.json"

const DisplayVideo = () => {

    console.log(MovieProjectsData)

    return (
        <>
        <Title title={"List of your projects :"}/>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"50px"}}>
                <Box sx={{display:"flex",flexDirection: 'column', gap:"8px"}}>
                    {MovieProjectsData.map((movieProject:any) => {
                        return <MovieProjectCard key={movieProject.id} movieProject={movieProject as MovieProject}/>
                    })}
                </Box>
            </Box>
        </>
    );
};

export default DisplayVideo;