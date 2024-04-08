import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js"

databaseConnection();

dotenv.config({
    path:".env"
})

const app = express();
//middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser())

app.get("/", (req,res)=>{
    res.status(200).json(
        {
            message:"fhjsfhxbvshjvbj",
            success:true,
        }
    )
})

//api
app.use("/api/v1/user", userRoute);




const callBackFunction =() =>{
console.log(`server liistens at port ${process.env.PORT} `)
}

app.listen(process.env.PORT,callBackFunction)