import { PrismaClient, User } from "@prisma/client";



const prisma =new PrismaClient();

//todo: create user 

const insertIntoDB=async (data:User): Promise<User> =>{
    const result = await prisma.user.create({
        data
    });
    return result;
}

export const UserService ={
    insertIntoDB
}