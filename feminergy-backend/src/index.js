const express = require('express');
var cors = require('cors');

const userRouter = require('./routes/userRoutes');
const doctorRouter = require('./routes/doctorRoutes');
const appointmentRouter = require('./routes/appointmentRoute');
const trackerRouter = require('./routes/trackerRoute');

const mongoose =require('mongoose')
require("dotenv").config()

const app = express();

app.use(express.json());
app.use(cors());

app.use((req,res,next)=>{
    console.log("HTTP method - " + req.method + " , URL- " + req.url);
    next();
})


app.use("/user",userRouter);
app.use("/doctor",doctorRouter);
app.use("/appointment",appointmentRouter);
app.use("/tracker",trackerRouter);


app.get('/',(req,res)=>{
    res.send('Hello, welcome to sign up')
})

mongoose
 .connect("mongodb+srv://shivamkotalia:Shivam12345@tennisdb.rmro6h4.mongodb.net/?retryWrites=true&w=majority")
 .then(()=>{
    //starting the server and specifying the port, making sure app created after connecting to db
    app.listen(5005,()=> {
        console.log('Signup  is running');
    })
    console.log('connected to mongoDB')
 }).catch((error)=>{
    console.log(error)
 })