import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { cookies } from 'next/headers'

// add http status



export async function POST(request: Request) {
  // who is sending this form
  const id = cookies().get("id")
  console.log({ id })
  // if anonyme peaple => not allow him
  if (!id) {
    NextResponse.json(
      {
        status: 404
      })
  }
  // else procude
  if (id) {
    try {
      // incoming data
      const dataInput = await request.json()
      console.log(dataInput)
      // validate incoming data
      try {

        const prisma = new PrismaClient()
        const user = await prisma.article.create({
         data:{
          categorie:dataInput.categorie,
          //"ijar",
          categorieId:parseInt(dataInput.categorieId),
          //1,

          subcategorie:dataInput.subcategorie,
          
          //"maison",
          subcategorieId:parseInt(dataInput.subcategorieId),

          lieu:dataInput.lieu,
          lieuId:parseInt(dataInput.lieuId),

          prix:parseInt(dataInput.prix),
          // from cookies
          authorId:parseInt(id.value),
          // default
          published:false

          
        }
        })



        return NextResponse.json(
          { msg: "I still working on implement add article" }
          //   {
          //   email: user.email,
          //   userId: user.id
          // },
          //   { status: 201 }
        )
      } catch (error) {
        console.log(error)
        // status 400 for bad request: incoming data is invalid
        return NextResponse.json({
          error,
          msg: "failed, to save article ijar, mybe can t connet to db"
        },
          {
            status: 400
          })
      }

    } catch (error) {
      console.log(error)
      return NextResponse.json({
        error,
        msg: "failed, to save article ijar, data invalid"
      },
        {
          status: 404
        })
    }
  }

}