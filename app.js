const express = require('express');
require('dotenv').config();
const app = express();
var morgan = require('morgan');
const cookieParser = require("cookie-parser");
const fileupload = require("express-fileupload");
const errorMiddlewares = require("./middlewares/error");


app.use(cookieParser());
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : "/tmp/",
}));

app.set("view engine" , "ejs");


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(morgan("tiny"));

//importing routes
const userRoute = require("./routes/userRoutes");


//assinging route with strings
app.use("/api/v1",userRoute);





app.use(errorMiddlewares);





app.get("/home",(req,res)=> {
    res.status(200).json({
        success : true,
        message : "Route is working fine"
    });
})


module.exports = app;

