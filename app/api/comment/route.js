import { NextResponse } from "next/server";
import { z } from "zod"
import prisma from './../../lib/prisma';

const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    comment: z.string()
})



export async function POST(request) {
    const body = await request.json()
    const validation = schema.safeParse(body)
    if (validation.success){
        //save post to the database
        try {
            
            
        } catch (error) {
            
        }
        return NextResponse.json({message:"success"},{status:201})}
    return NextResponse.json(validation.error.errors, {status: 400 })
}