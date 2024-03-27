import {CustomResponse} from "../dtos/CustomResponse";
import NoteModel from "../models/NoteModel";
import {NoteInterface} from "../type/SchemaTypes";

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
                new CustomResponse(200,"Note saved successfully.",success)
            )
        })
            .catch( error => {
                res.status(500).send(
                    new CustomResponse(500,`Something went wrong! : ${error}`)
                )
            })

    }catch (error){
        res.status(500).send(
            new CustomResponse(500,`Error : ${error}`)
        )
    }

}

export const updateNote = async (req : any, res:any) => {

    try {

        // let note_data = JSON.parse(req.body.note);
        let note_data = req.body;

        let note_by_id : NoteInterface | null = await NoteModel.findOne({_id:note_data._id});

        if (note_by_id){

            await NoteModel.findByIdAndUpdate(
                {_id:note_data._id},
                {
                    user:note_data.user,
                    title:note_data.title,
                    description:note_data.description,
                    data:note_data.date
                }
            )
                .then( success => {

                    res.status(200).send(
                        new CustomResponse(200,"Note successfully updated!")
                    )

                })
                .catch( error => {
                    res.status(500).send(
                        new CustomResponse(500,`Error : ${error}`)
                    )
                })

        }else {
            res.status(404).send(
                new CustomResponse(404,`Note not found!!!`)
            )
        }


    }catch (error){
        res.status(500).send(
            new CustomResponse(500,`Error : ${error}`)
        )
    }

}

export const deleteNote = async (req : any, res:any) => {

    try {

        let note_by_id : NoteInterface | null = await NoteModel.findOne({_id:req.params.noteId});

        if (note_by_id){

            await NoteModel.deleteOne({_id:req.params.noteId})
                .then( success => {

                    res.status(200).send(
                        new CustomResponse(200, "Note delete successfully")
                    );

                })
                .catch( error => {
                    res.status(500).send(
                        new CustomResponse(500, `Something went wrong : ${error}`)
                    );
                })

        }else {
            res.status(404).send(
                new CustomResponse(404,`Note not found!!!`)
            )
        }

    }catch (error){
        res.status(500).send(
            new CustomResponse(500,`Error : ${error}`)
        )
    }

}

export const viewNote = async (req : any, res:any) => {

    try {

        let query_string :any = req.query;
        let note_id = query_string.id;

        let note_by_id : NoteInterface | null = await NoteModel.findOne({_id:note_id});

        if (note_by_id){
            res.status(200).send(
                new CustomResponse(200,`Note found!`, note_by_id)
            )
        }

    }catch (error){
        res.status(500).send(
            new CustomResponse(500,`Error : ${error}`)
        )
    }

}

export const viewAllNotes = async (req : any, res:any) => {

    try {

    }catch (error){
        res.status(500).send(
            new CustomResponse(500,`Error : ${error}`)
        )
    }

}