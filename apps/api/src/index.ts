import express from 'express';
import { sendResponse } from './controllers/auth-controller';

const app = express();

app.get("/",(req,res)=>{
    res.status(400).json({
        success:true,
        message:"Server is running",
    })
})

app.get("/send",sendResponse);


app.listen(4000,()=>{
    console.log("server is running in the port ", 4000)
})