
import { dbConnection } from "./dbConnection/index.js"
import { app } from "./app.js"
import dotenv from "dotenv"

dbConnection().catch((err) => {
    console.log(err);

})


