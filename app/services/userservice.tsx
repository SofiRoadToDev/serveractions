"use server"

import { User } from '@prisma/client'
import { prisma } from '../lib/prisma'




const createUser=async(formData:FormData)=>{
    const user:User={
        formData

    }
    
    const existentUser= await prisma.user.findFirst({
        where:{
            username:user.username
        }
    })
    if(existentUser){
        throw new Error(" user already stored in our database")
    }else{
        const newUser=await prisma.user.create({
            data:user
        })
        return user;
    }
}

export default {
    createUser
}