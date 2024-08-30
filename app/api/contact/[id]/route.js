import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request,{params}){
    const contact = await prisma.contact.findUnique({where:{
        id:parseInt(params.id)
    }})
    return contact? NextResponse.json(contact):NextResponse.json({msg:"Contact not found"},{status:"404"})
}

export async function DELETE(request,{params}){
    const contact = await prisma.contact.findUnique({where:{
        id:parseInt(params.id)
    }})
    if(contact){
        await prisma.contact.delete({where:{
            id:parseInt(params.id)
        }})
    return NextResponse.json({msg:"deleted"},{status:"204"})
    }
    return NextResponse.json({msg:"Contact not found"},{status:"404"})

}