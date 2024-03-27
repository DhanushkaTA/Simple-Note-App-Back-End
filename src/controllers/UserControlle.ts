import {CustomResponse} from "../dtos/CustomResponse";
import UserModel from "../models/UserModel";
import {UserInterface} from "../type/SchemaTypes";
import bcrypt from "bcryptjs"
import jwt, {Secret} from "jsonwebtoken";
import express from "express";
import process from "process";

export const createUser = async (req : any, res:any) => {
  try {

      let user_by_email : UserInterface | null = await UserModel.findOne({email:req.body.email});

      if (!user_by_email){

          bcrypt.hash(req.body.password, 8, async function (err, hash){

              let userModel = new UserModel({
                  name:req.body.name,
                  email:req.body.email,
                  password:hash
              });

             await userModel.save()
                 .then( success => {
                     success.password="";

                     res.status(200).send(
                         new CustomResponse(200, "User saved successfully!", success)
                     )
             })
                 .catch( error => {
                     res.status(500).send(
                         new CustomResponse(500,`Error : ${error}`)
                     )
                 })

          })

      }else {
          res.status(409).send(
              new CustomResponse(409,"Email already used!")
          )
      }

  }catch (error){
      res.status(500).send(
          new CustomResponse(500,`Error : ${error}`)
      )
  }
}

export const authUser = async (req :express.Request, res :any) => {

    try {

        let user_by_email :UserInterface | null = await UserModel.findOne({email:req.body.email});

        if (user_by_email) {

            let isMache = await bcrypt.compare(req.body.password, user_by_email.password);

            if (isMache){

                generateToken(user_by_email, res)

            }else {
                res.status(401).send(
                    new CustomResponse(401,"Password incorrect!!!")
                )
            }

        }else {
            res.status(404).send(
                new CustomResponse(404,"User not found!!!")
            )
        }

    }catch (error){
        res.status(500).send(
            new CustomResponse(500,`Error : ${error}`)
        )
    }

}

const generateToken = (user: UserInterface, res :express.Response) => {

    user.password = "";
    let expiresIn = "1w";

    jwt.sign({user}, process.env.SECRET as Secret, {expiresIn}, (error :any,token :any) => {
        if (error){
            res.status(500).send(
                new CustomResponse(500,`Something went wrong : ${error}`)
            )
        } else {

            let res_body={
                user: user,
                accessToken: token
            }

            res.status(200).send(
                new CustomResponse(200,"Access",res_body)
            );

        }
    });

}


export const deleteUser = async (req :any, res :any) => {

    try {

        let email = res.tokenData.user.email;

        let user_by_email = await UserModel.findOne({email:email});

        if (user_by_email) {

            await UserModel.deleteOne({email:email})
                .then( success => {
                    res.status(200).send(
                        new CustomResponse(200, "User delete successfully!")
                    )
                })
                .catch(error => {
                    res.status(500).send(
                        new CustomResponse(500,`Error : ${error}`)
                    )
                })

        }

    }catch (error){
        res.status(500).send(
            new CustomResponse(500,`Error : ${error}`)
        )
    }

}