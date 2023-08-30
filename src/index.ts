import { PrismaClient } from "@prisma/client";
import app from "./app";



const prisma =new PrismaClient();
const port=process.env.PORT || 3004;

async function main() {
    app.listen(port,()=>{
        console.log(`server is listening on ${port}`)
    })
    
}
main();