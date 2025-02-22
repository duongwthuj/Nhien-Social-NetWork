import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
dotenv.config({
    path:".env"
});
const app = express();
databaseConnection();


app.listen(process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT);
})
app.listen()