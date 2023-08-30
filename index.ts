import { PrismaClient } from "@prisma/client";

const prisma =new PrismaClient();

async function main() {

    //todo: get data from database
    // const getAllUsers =await prisma.user.findMany();
    // console.log(getAllUsers);

    //todo: create  data to database

    const createUser =await prisma.user.create({
        data:{
            email:'bappa2@gmail.com',
            name:'bappa2'
        }
    });
    console.log(createUser);

    
}
main();