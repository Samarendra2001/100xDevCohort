//write a function to create a users table in your database
import { Client } from "pg";

const client = new Client({
    connectionString : "postgresql://neondb_owner:npg_VpXKe9WvzO3L@ep-shiny-waterfall-a58c42p4-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
})

async function creatUsersTable(){
    await client.connect();
    try{
       const result =  await client.query(`
        CREATE TABLE users1(
            id SERIAL PRIMARY KEY,
            name VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(50) UNIQUE NOT NULL,
            password VARCHAR(50) NOT NULL,
            created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        `);
        console.log("Table created successfully");
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
creatUsersTable();
