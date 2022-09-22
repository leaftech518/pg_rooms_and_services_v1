const express = require('express');
require('dotenv').config();
const app = express();
var morgan = require('morgan');
const cookieParser = require("cookie-parser");
const fileupload = require("express-fileupload");

app.use(cookieParser());
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : "/tmp/",
}));

app.set("view engine" , "ejs");

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(morgan("tiny"));


app.get("/home",(req,res)=> {
    res.status(200).json({
        success : true,
        message : "Route is working fine"
    });
})


module.exports = app;

