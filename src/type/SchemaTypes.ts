import * as mongoose from "mongoose";

export interface NoteInterface extends mongoose.Document{
    user:string,
    title:string,
    description:string,
    date:Date
}

export interface UserInterface extends mongoose.Document{
    name:string,
    email:string,
    password:string
}