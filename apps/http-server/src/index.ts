// import { prisma } from "@repo/db";
import prismaClient from "@repo/db";
import express from "express";


const port = 3000;
const app = express();

app.get("/",async (req, res)=>{

    try{
        const user = await prismaClient.user.create({
            data:{
                name: "Kyle HTTP-server",
                age: 4200
            }
        })
        console.log(user);
    }catch(e){
        console.log(e);
    }
    // prisma.user.create({
    //     data:{
    //         name: "Kyle HTTP",
    //         age : 42
    //     }
    // })

    res.send("Reached Http Server");
})

app.listen(port, ()=>{
    console.log(`Express on port:${port}`);
})