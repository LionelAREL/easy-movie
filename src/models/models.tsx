export enum TypeMovieProject {
    Automatic = "auto",
    Editor = "editor",
}

export class MovieProject {
    id:number;
    name:string;
    description:string;
    type:TypeMovieProject;
    archived:boolean = false;
    constructor(name:string = "default name",description:string = "default description",type:TypeMovieProject = TypeMovieProject.Automatic) {
        this.id = Date.now();
        this.name = name;
        this.description = description;
        this.type = type;
    }
    data(data:any){
        this.name = data.name;
        this.description = data.description;
        this.type = data.type;
    }
    toJson(){
        return{
            id:this.id,
            name:this.name,
            description:this.description,
            type:this.type,
        }
    }
}
  