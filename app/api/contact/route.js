import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod"


const schema = z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string().email(),
    message: z.string()
})

export async function POST(request) {

    const {name,phone,email,message} = await request.json()
    const validation = schema.safeParse({name,phone,email,message})

    if (validation.success){
        try {
             const data = await prisma.contact.create({data:{name,phone,email,message}})
             return NextResponse.json(data,{status:201});

        } catch (e) {

        }}
    return NextResponse.json(validation.error.errors, {status: 400 })
}



export async function GET (request){
    try {
        const siteMessages = await prisma.contact.findMany()
        return NextResponse.json(siteMessages)
    } catch (error) {
        
    }
}