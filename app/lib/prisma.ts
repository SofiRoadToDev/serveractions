import {PrismaClient} from '@prisma/client'

const prismaConnection=global as unknown  as {prisma:PrismaClient};

export const prisma= prismaConnection.prisma || new PrismaClient({log:["query"]})

if( process.env.NODE_ENV != "production") prismaConnection.prisma;