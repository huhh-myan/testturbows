import prismaClient from "./index.js";


async function test_database_connection() {
    try{
        const user = await prismaClient.user.create({
            data:{
                name: "Kyle -test-db-connc",
                age: 42000
            }
        })

        console.log(user);
    }catch(e){
        console.log(e);
    }
}

test_database_connection();