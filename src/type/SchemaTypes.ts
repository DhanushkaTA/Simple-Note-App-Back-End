import * as mongoose from "mongoose";

export interface NoteInterface extends mongoose.Document{
    id:string,
    title:string,
    description:string,
    date:Date
}