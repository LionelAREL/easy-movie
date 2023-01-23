import { Button, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import styled from 'styled-components';
import {TypeMovieProject, MovieProject} from '../models/models'

type Props = {
    onSubmit: any,
    buttonText:string,
    updateVideo?:MovieProject,
    children?:React.ReactNode,
};
const MovieProjectForm = ({onSubmit,children,buttonText,updateVideo}:Props) => {

    const defaultValues = updateVideo ? {
        defaultValues: {
          name: updateVideo.name,
          description: updateVideo.description
        }
      } : {}

    const { register, handleSubmit, formState: { errors } } = useForm<any>(defaultValues);


    return (
        <Forms style={{display:"flex", gap:"10px", alignItems:"center", margin:"0 auto", marginTop:"50px", backgroundColor:"white",width:"fit-content", padding:"20px",borderRadius:"10px"}} onSubmit={handleSubmit(onSubmit)}>

            <InputText error={errors.name && true} label="name" variant="outlined" {...register("name",{required:true})} helperText={errors.name && "name required"} />
            <InputSelect defaultValue={updateVideo ? updateVideo.type : TypeMovieProject.Automatic} error={errors.type && true} label="type" variant="outlined" {...register("type",{required:true})} >
                {Object.values(TypeMovieProject).map((type:string,index:number) => {
                    return <MenuItem key={index} value={type}>{type}</MenuItem>
                })}
            </InputSelect>
            <InputLongText   multiline rows={4} error={errors.description && true} label="description" variant="outlined" {...register("description",{required:true})} helperText={errors.description && "description required"} />

            <Error>
                {children}
            </Error>
            <Button type="submit" sx={{color:"#ef4b74", border:"solid black 1px"}}>{buttonText}</Button>
        </Forms>
    );
};

const Forms = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Error = styled.div`
    color:red;
    font-size: 18px;
    margin-bottom: 10px;
`

const InputText = styled(TextField)`
    width:250px;
    `
const InputSelect = styled(Select)`
`

const InputLongText = styled(TextField)`
    width:300px;
`

export default MovieProjectForm;