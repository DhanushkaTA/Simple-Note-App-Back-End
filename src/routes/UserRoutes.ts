import express from "express";
import * as UserController from "../controllers/UserControlle"
import * as VerifyToken from "../middlewares/verifyToken"

let router = express.Router();

router.post('/save', UserController.createUser)

router.get('/auth', UserController.authUser)

router.delete('/delete',VerifyToken.verifyToken, UserController.deleteUser)

export default router;