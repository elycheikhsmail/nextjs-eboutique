import fs from 'node:fs';

const pathToFile = './src/data/wilaya.json';
const pathToFileMoughataa = './src/data/lieux.json';
 


export function readWilaya():string[]{
    try {
        const data = fs.readFileSync(pathToFile)
        const dataAsStr = data.toString() 
        const dataAsJson = JSON.parse(dataAsStr)
        const wilayas:string[]  = dataAsJson["Wilayas_Mauritanie"]
 
        return wilayas
        
    } catch (error) {
        console.log(error)
        return []
    }

}

export function readMoughtaa():any{
    try {
        const data = fs.readFileSync(pathToFileMoughataa)
        const dataAsStr = data.toString() 
        const dataAsJson = JSON.parse(dataAsStr)
        const wilayas = dataAsJson["Wilayas"]
      
        return wilayas
        
    } catch (error) {
        console.log(error)
        return []
    }

}

