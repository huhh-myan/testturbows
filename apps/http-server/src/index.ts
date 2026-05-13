// import { prisma } from "@repo/db";
import prismaClient from "@repo/db2";
import express from "express";


const port = 3000;
const app = express();

app.get("/",async (req, res)=>{

    try{
        console.log("cwd:", process.cwd());
        console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);
        
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