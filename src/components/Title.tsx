import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Title = ({title}:any) => {
    return (
        <Box sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <Link to="/">
                <ArrowBackIcon fontSize='large'/>
            </Link>
            <h1 style={{margin:"0 auto"}}>{title}</h1>
        </Box>
    );
};

export default Title;