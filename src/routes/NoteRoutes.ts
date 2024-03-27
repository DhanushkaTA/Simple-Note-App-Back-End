import express from "express";
import * as NoteController from "../controllers/NoteController"

let router = express.Router();

router.post('/save', NoteController.createNote) // note/save

router.put('/update', NoteController.updateNote) // note/update

router.delete('/delete/:noteId', NoteController.createNote) // note/save

router.get('/get/note', NoteController.createNote) // note/get/note?id=

router.get('/get/all', NoteController.createNote) // note/get/all

export default router;