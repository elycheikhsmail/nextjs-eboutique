import { NextResponse } from 'next/server' 
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  
  cookies().delete('id')
  
  return NextResponse.json({  msg: "you are logout" }, { status: 200 })
}