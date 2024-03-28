import express from "express";
import * as NoteController from "../controllers/NoteController"
import * as VerifyToken from "../middlewares/verifyToken"

let router = express.Router();

router.post('/save', VerifyToken.verifyToken, NoteController.createNote) // note/save

router.put('/update', VerifyToken.verifyToken, NoteController.updateNote) // note/update

router.delete('/delete/:noteId', VerifyToken.verifyToken, NoteController.deleteNote) // note/save

router.get('/get/note', VerifyToken.verifyToken, NoteController.viewNote) // note/get/note?title=

router.get('/get/all', VerifyToken.verifyToken, NoteController.viewAllNotes) // note/get/all

export default router;