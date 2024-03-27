import {CustomerResponse} from "../dtos/CustomerResponse";
import NoteModel from "../models/NoteModel";

export const createNote = async (req : any, res:any) => {

    try {

        let noteModel = new NoteModel({
            user:req.body.user,
            title:req.body.title,
            description:req.body.description,
            date:req.body.date
        });

        await noteModel.save()
            .then( success => {
            res.status(200).send(
                new CustomerResponse(200,"Note saved successfully.",success)
            )
        })
            .catch( error => {
                res.status(500).send(
                    new CustomerResponse(500,`Something went wrong! : ${error}`)
                )
            })

    }catch (error){
        res.status(500).send(
            new CustomerResponse(500,`Error : ${error}`)
        )
    }

}

export const updateNote = async (req : any, res:any) => {

    try {

    }catch (error){
        res.status(500).send(
            new CustomerResponse(500,`Error : ${error}`)
        )
    }

}

export const deleteNote = async (req : any, res:any) => {

    try {

    }catch (error){
        res.status(500).send(
            new CustomerResponse(500,`Error : ${error}`)
        )
    }

}

export const viewNote = async (req : any, res:any) => {

    try {

    }catch (error){
        res.status(500).send(
            new CustomerResponse(500,`Error : ${error}`)
        )
    }

}

export const viewAllNotes = async (req : any, res:any) => {

    try {

    }catch (error){
        res.status(500).send(
            new CustomerResponse(500,`Error : ${error}`)
        )
    }

}