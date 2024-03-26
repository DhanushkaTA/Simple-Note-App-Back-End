import dotenv from 'dotenv'
dotenv.config()

import express from "express"
import bodyParser from "body-parser";
import cors from "cors"
import * as mongoose from "mongoose";
import * as process from "process";

let app = express();

app.use(cors({
    origin: "*",
    methods:"*"
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL as string).then( r => {
    console.log("DB Connected Successfully")
}).catch( error => {
    console.log(`DB Connection Error : ${error}`)
});

app.listen(9001, () => {
    console.log("Server start on port 9001")
})