import React from 'react';
import { useParams } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import Title from '../components/Title';
import { MovieProject } from '../models/models';
import MovieProjectsData from "./../data/MovieProjectsData.json"

const ModifyVideo = () => {
    const { movieProjectId } = useParams();
    const [movieProject,setMovieProject] = React.useState<any>({});

    const onSubmit = (data:any) => {
        let movieProject = new MovieProject();
        movieProject.data(data)
    }

    React.useEffect(() => {
        let project = MovieProjectsData.filter((movieProject:any) => movieProject.id == movieProjectId)
        console.log(project)
        setMovieProject(project[0]);
    },[]);

    return (
        <div>
            <Title title={"Update movie project :"}/>
            <MovieForm updateVideo={new MovieProject(movieProject.name,movieProject.description,movieProject.type)} onSubmit={onSubmit} buttonText={"Update video"}/>
        </div>
    );
}

export default ModifyVideo;