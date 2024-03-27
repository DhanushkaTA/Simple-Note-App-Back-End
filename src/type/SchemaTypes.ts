import * as mongoose from "mongoose";

export interface note extends mongoose.Document{
    id:string,
    title:string,
    description:string,
    date:string
}