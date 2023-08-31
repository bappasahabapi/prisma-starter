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
};


const insertOrUpdateProfile=async(req:Request,res:Response)=>{
    const result =await UserService.insertOrUpdateProfile(req.body);
    try {
        res.send({
            success:true,
            message:"Profile created or updated successfully",
            data:result
        })
        
    } 
    catch (error) {
        res.send(error);
    }

};

const getUsers=async(req:Request,res:Response)=>{
    try {
        const result =await UserService.getUsers();
        res.send({
            success:true,
            message:"Users retrived successfully",
            data:result
        })
    } 
    catch (error) {
        res.send(error);
    }
};

export const UserController={
    insertIntoDB,
    insertOrUpdateProfile,
    getUsers
}