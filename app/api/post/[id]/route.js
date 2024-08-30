import { NextResponse } from 'next/server';

export async function GET(request,{params}){
    return NextResponse.json(params,{status:"200"})
}

export async function DELETE(request,{params}){
    return NextResponse.json(params,{status:"200"})
}