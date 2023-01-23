import React from 'react';
import MovieForm from '../components/MovieForm';
import Title from '../components/Title';
import { MovieProject } from '../models/models';
import MovieProjectsData from "./../data/MovieProjectsData.json"


const CreateVideo = () => {

    const onSubmit = (data:any) => {
        let movieProject = new MovieProject();
        movieProject.data(data)
        console.log("create movie project",movieProject)
        MovieProjectsData.push(movieProject.toJson())
        console.log(MovieProjectsData)
    }

    return (
        <div>
            <Title title={"Create videos :"}/>
            <MovieForm onSubmit={onSubmit} buttonText={"Create video"}/>
        </div>
    );
};

export default CreateVideo;