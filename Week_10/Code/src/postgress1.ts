//create a function that let u insert  data in to table 

import {Client} from "pg";
//Async function to insert data into the table
async function insertData(){
    const client = new Client({
        connectionString:"postgresql://neondb_owner:npg_VpXKe9WvzO3L@ep-shiny-waterfall-a58c42p4-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
    });
    try{
        await client.connect();
        const insertQuery = "INSERT INTO users1(name,email,password) VALUES('Sam','sam@gmail.com','samar@2001') RETURNING *";
        const result = await client.query(insertQuery);
        console.log("Data inserted successfully",result);
    }catch(err){
        console.error("Error inserting data",err);
    }finally{
        await client.end();//closing the client connection
    }
}

insertData();