import * as mongoose from "mongoose";
import * as SchemaTypes from '../type/SchemaTypes'

let userSchema = new mongoose.Schema<SchemaTypes.UserInterface>({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true}
});

let UserModel = mongoose.model('user',userSchema);

export default UserModel;