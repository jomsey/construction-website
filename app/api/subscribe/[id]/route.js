import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';


export async function GET(request,{params}){
   try {
        const subscriber = await prisma.subscription.findUnique({where:{id:parseInt(params.id)}})
        return subscriber?NextResponse.json(subscriber,{status:"200"}):NextResponse.json({message:"Cannot find subscriber with given id"},{status:"404"})
   } catch (error) {
        return NextResponse.json({message:"Oops , something is wrong"},{status:"500"})
   }
}

export async function DELETE(request,{params}){
    try {
        const subscriber = await prisma.subscription.findUnique({where:{id:parseInt(params.id)}})
        if(subscriber){
            await prisma.subscription.delete({where:{id:parseInt(params.id)}})
            return NextResponse.json({message:"deleted successfully"},{status:"204"})
        }
        return NextResponse.json({message:"Cannot find subscriber with given id"},{status:"404"})

       } catch (error) {
        return NextResponse.json({message:"Oops , something is wrong"},{status:"500"})
    }
    }