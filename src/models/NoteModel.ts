import * as mongoose from "mongoose";
import * as SchemaTypes from '../type/SchemaTypes'
import {Schema} from "mongoose";

let noteSchema =
    new mongoose.Schema<SchemaTypes.NoteInterface>({
    user:{type:String, required: true},
    title:{type:String, required:true},
    description:{type:String},
    date:{type:Date, required: true}
});

let NoteModel = mongoose.model('note',noteSchema);

export default NoteModel;