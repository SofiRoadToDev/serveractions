import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma=new PrismaClient();

async function main(){
    const user= await prisma.user.upsert({
        where:{email:"admin@admin.com"},
        update:{},
        create:{
            username:"admin",
            email:"admin@sofi.com"
        }
    })

    console.log({user})
}

main()
    .then(()=>prisma.$disconnect())
    .catch(async(e)=>{
        await prisma.$disconnect();
        process.exit();
    })