import { WebSocketServer } from "ws";
import prismaClient from "@repo/db";
const port = 3001;
const wss = new WebSocketServer({port: port});


wss.on("connection",async (socket, req)=>{
    console.log("Someone Connected!");

    const user = await prismaClient.user.create({
        data:{
            name: "Kyle-WS",
            age: 420
        }
    })

    console.log(user);
    
    socket.send("Someone Joined this place!");
})