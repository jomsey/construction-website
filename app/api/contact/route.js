import { NextResponse } from "next/server";
import { z } from "zod"

const schema = z.object({
    name: z.string(),
    phone: z.string().min(10),
    email: z.string().email(),
    message: z.string()
})

export async function POST(request) {
    const body = await request.json()
    const validation = schema.safeParse(body)
    if (validation.success) return NextResponse.json(body);
    return NextResponse.json(validation.error.errors, { status: 400 })

}