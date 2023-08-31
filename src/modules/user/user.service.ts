import { PrismaClient, Profile, User } from "@prisma/client";



const prisma =new PrismaClient();

//todo: create user 
const insertIntoDB=async (data:User): Promise<User> =>{
    const result = await prisma.user.create({
        data
    });
    return result;
};

const insertOrUpdateProfile=async (data:Profile): Promise<Profile> =>{
    const isExist =await prisma.profile.findUnique({
        where:{
            userId:data.userId
        }
    });

    if(isExist){
        const result = await prisma.profile.update({
            where:{
                userId:data.userId
            },
            data:{
                bio:data.bio
            }

        })
        return result;
    }
    //todo: if not exist user then simple create it
    const result = await prisma.profile.create({
        data
    })
    return result;
};

//todo: get users

// const getUsers = async()=>{
//     const result =await prisma.user.findMany();
//     return result;
// };
const getUsers = async()=>{
    const result =await prisma.user.findMany({

        //todo: To show only the specific fields in database
        // select:{
        //     name:true,
        //     email:true
        // }
        //todo: include means populated[this will show data including profile information]
        include:{
           profile:true
        }
    });
    return result;
};

const getSingleUser = async(id:number)=>{
    const result =await prisma.user.findUnique({
        where:{
            id
        },
        include:{
            profile:true
         }
    });
    return result;
};

export const UserService ={
    insertIntoDB,
    insertOrUpdateProfile,
    getUsers,
    getSingleUser
}