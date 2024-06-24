import { NextResponse } from "next/server";
import { z } from "zod"

const schema = z.object({
    email: z.string().email(),
})

export async function POST(request) {
    const body = await request.json()
    const validation = schema.safeParse(body)
    if (validation.success){
        //save data to the database here
        return NextResponse.json({status:201})}
    return NextResponse.json(validation.error.errors, {status: 400 })
}