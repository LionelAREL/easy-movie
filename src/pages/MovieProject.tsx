import { Avatar, Box, Button, Card, Typography } from '@mui/material';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MovieProject } from '../models/models';
import MovieProjectsData from "./../data/MovieProjectsData.json"
import lecteur from "./../assets/lecteur.png"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const MovieProjectPage = () => {
    const { movieProjectId } = useParams();
    const navigate = useNavigate();

    const [movieProject,setMovieProject] = React.useState<any>({});

    React.useEffect(() => {
        let project = MovieProjectsData.filter((movieProject:any) => movieProject.id == movieProjectId)
        console.log(project)
        setMovieProject(project[0]);
    },[]);
    return (
        <Box>
            <Link to="/videos">
                <ArrowBackIcon fontSize='large'/>
            </Link>
           <Card sx={{ display: 'flex', flexDirection: 'column', padding:"12px", justifyContent:"center", marginTop:"20px",gap:"8px"}}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:"space-between"}}>
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
            <Card sx={{ display: 'flex', flexDirection: 'column', marginTop:"20px", padding:"12px"}}>
                <Typography component="div" variant="h6">
                        Description : <br></br>
                        {movieProject.description}
                </Typography>
            </Card>
            <Card sx={{ display: 'flex', flexDirection: 'row', marginTop:"20px", justifyContent:"center"} }>
                <img src={lecteur} alt="" />
            </Card>
            <Card sx={{ display: 'flex', flexDirection: 'row', margin:"50px auto 0", gap:"10px", justifyContent:"center",alignItems:"center",width:"fit-content"} }>
                <Button sx={{backgroundColor:"white"}} onClick={() => {navigate("/videos/update/"+movieProject.id)}}>Update</Button>
                <Button sx={{backgroundColor:"white"}}>Archive</Button>
            </Card>
        </Box>
    );
};

export default MovieProjectPage;