import { redirect } from "next/dist/server/api-utils"
import { prisma } from "../lib/prisma"



export default function page() {

    const createUser=async(formData:FormData)=>{
        'use server'
        console.log(formData.get('username'))

       await prisma.user.create({
            data:{
                username:formData.get('username') as string,
                email:formData.get('email') as string
            }
        })

        
    }
  return (
    <>
    
        <div className="w-full max-w-xs mx-auto py-4 text-center">
        <h3 className='text-xl py-3'>Register a new User</h3>
        <form action={createUser} method="POST" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
            </label>
            <input name="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-purple-400::placeholder focus:shadow-outline" id="username" type="text" placeholder="Username"/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
            </label>
            <input name="email"className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-purple-400::placeholder focus:shadow-outline" id="email" type="email" placeholder="Email"/>
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
            </label>
            <input name="password" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password"/>
            <p className="text-red-500 text-xs italic">Please write a password.</p>
        </div>
        <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Register
            </button>           
        </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
        &copy;2023 Sofi Corp. All rights reserved.
        </p>
    </div>
  </>
  )
}
