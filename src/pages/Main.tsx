import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./../styles/main.scss"
import logo from "./../assets/logo.png"


const LinkCustom = ({text,link}:any) => {
    return (
        <Link to={link} style={{color:"black",textDecoration:"none"}}>
            <Card sx={{display:"flex",alignItems:"center",justifyContent:"center",width:"500px", padding:"8px"}}>
                <Typography component="div" variant="h5">
                    {text}
                </Typography>
            </Card>
        </Link>
    );
};


const Main = () => {
    return (
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"60vh"}}>
            <img style={{marginBottom:"40px"}} src={logo} alt="" />
            <Box sx={{display:"flex",flexDirection: 'column', gap:"20px",width:"fit-content"}}>
                <LinkCustom text={"Create a new project"} link={"videos/create"}/>
                <LinkCustom text={"Your projects"} link={"videos"}/>
            </Box>
        </Box>
    );
};

export default Main;