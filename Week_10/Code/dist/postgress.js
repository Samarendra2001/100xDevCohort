"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//write a function to create a users table in your database
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:npg_VpXKe9WvzO3L@ep-shiny-waterfall-a58c42p4-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
});
function creatUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            const result = yield client.query(`
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
        }
        catch (err) {
            console.log(err);
        }
    });
}
creatUsersTable();
