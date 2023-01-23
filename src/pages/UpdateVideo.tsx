import React from 'react';
import { useParams } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import Title from '../components/Title';
import { MovieProject, TypeMovieProject } from '../models/models';
import MovieProjectsData from "./../data/MovieProjectsData.json"

const ModifyVideo = () => {
    const { movieProjectId } = useParams();
    const [movieProject,setMovieProject] = React.useState<any>(null);

    const onSubmit = (data:any) => {

        let toRemplace = MovieProjectsData.filter((movieProject:any) => movieProject.id == movieProjectId)[0];
        toRemplace.name = data.name;
        toRemplace.type = data.type;
        toRemplace.description = data.description;
    }

    React.useEffect(() => {
        let project = MovieProjectsData.filter((movieProject:any) => movieProject.id == movieProjectId)
        console.log(project)
        let temp = project[0]
        let mp = new MovieProject(temp.name,temp.description,temp.type as TypeMovieProject)
        setMovieProject(mp);
    },[]);

    return (
        <div>
            <Title title={"Update movie project :"}/>
            { movieProject != null ? <MovieForm updateVideo={movieProject} onSubmit={onSubmit} buttonText={"Update video"}/> : ""}
        </div>
    );
}

export default ModifyVideo;