import { NextResponse } from "next/server";
import { z } from "zod"
import prisma from "@/app/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const schema = z.object({
    email: z.string().email(),
})

export async function POST(request) {
    const body = await request.json()
    const validation = schema.safeParse(body)
    if (validation.success){
        try {
            //save data to the database here
            const subscriber = await prisma.subscription.create({data:{email:body.email}})
            return NextResponse.json(subscriber,{status:201})
        } catch (error) {
            if(error instanceof PrismaClientKnownRequestError){
                 if(error.code === "P2002") return NextResponse.json({message:"User with the submitted email already exists",type:"warning"},{status:"403"})
            }
            return NextResponse.json({message:"Something is wrong"},{status:"500"})
        }
    }
    return NextResponse.json(validation.error.errors, {status: "400" })
}

export async function GET(request){
    const subscribers = await prisma.subscription.findMany()
    return NextResponse.json(subscribers,{status:200})

}



