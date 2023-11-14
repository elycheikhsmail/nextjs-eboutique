import { PrismaClient } from '@prisma/client'
import { readWilaya, readMoughtaa } from './read'
// read sychronise way the wylaya json file
// insert the data in right table

const prisma = new PrismaClient()
const wilayas = readWilaya()
const moughtaas = readMoughtaa()

async function saveWilayaIndb() {
    wilayas.forEach(
        async (w) => await prisma.wilaya.create({
            data: {
                name: w
            }
        })
    )
}

async function saveMoughtaasIndb() {
    wilayas.forEach(
        async (w:string, index:number) => {
            // get list of moughataa in the wilaya
            const moughtaasInGivenWilaya = moughtaas[`${w}`]
            // save all moughataa in the db
            moughtaasInGivenWilaya.forEach(
                async (m:string) => {
                    await prisma.moughataa.create({
                        data: {
                            name: m,
                            wilayaId: index + 1
                        }
                    })
                }
            )

        }

    )
}


async function main() {
    await saveWilayaIndb()
    await saveMoughtaasIndb()
}


main()
    .then(async () => {
        console.log("work done")
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
