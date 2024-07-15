import { NextResponse } from "next/server";
import { z } from "zod"

const schema = z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string().email(),
    message: z.string()
})

export async function POST(request) {
    const body = await request.json()
    const validation = schema.safeParse(body)
    if (validation.success){
        //save message to the database
        return NextResponse.json({message:"Message sent successfully"},{status:201})}
    return NextResponse.json(validation.error.errors, {status: 400 })
}