import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'


import { cookies } from 'next/headers'

// add http status



export async function POST(request: Request) {
  try {
    // incoming data
    const data = await request.json()
    try {

      const prisma = new PrismaClient()
      const user = await prisma.user.create({
        data
      })

      cookies().set({
        name: 'id',
        value: `${user.id}`,
        httpOnly: true,
        //expires: 3000,
        //sameSite:true,
        //secure: true,
        path: '/',
      })

      return NextResponse.json({
        email: user.email,
        userId: user.id
      },
        { status: 201 }
      )
    } catch (error) {
      console.log(error)
      // status 400 for bad request: incoming data is invalid
      return NextResponse.json({ error, msg: "failed, maybe user alredy exist" }, { status: 400 })
    }

  } catch (error) {
    console.log(error)
    return NextResponse.json({ error, msg: "maybe missing or invalide email and possword" }, { status: 404 })
  }

}