import express from "express";//for creating and running the server
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
dotenv.config()
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB!');
}).catch((err)=>{
    console.log(err);
});
const app = express();
app.listen ( 7000, ()=> {
    console.log('Server is running on port 7000');
});
app.use('/api/user', userRouter);

 //req is client and res is server
