import { Request, Response } from "express";
import { UserService } from "./user.service";


const insertIntoDB=async(req:Request,res:Response)=>{
    try {
        const result =await UserService.insertIntoDB(req.body);
        res.send({
            success:true,
            message:"User created successfully",
            data:result
        })
    } 
    catch (error) {
        res.send(error);
    }
}

export const UserController={
    insertIntoDB
}