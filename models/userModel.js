const mongoose = require("mongoose");
const validator = require("validator");

const userModel = new mongoose.Schema({
    name : {
        type : String ,
        required : [true , "Please enter the user name"],
        maxLength  : [15 , "Name should not  exceed 15 characters"],
    },
    firebaseUID : {
        type : String,
        required : [true , "Please provide the firebase UID"],
        unique : true
    },
    email : {
        type : String ,
        unique : true,
        
    },
    phoneNumber : {
        type : Number ,
        unique : true,
    },
    address : {
        type : String ,
    },
    photo :{
        id : {
            type : String,
            required : [true , "Please provide photo id"]       
        },
        public_url : {
            type : String,
            required :  [true , "Please provide photo public url"]
        },
        secure_url : {
            type : String,
            required :  [true , "Please provide photo public url"]
        },
    },
    parentPhone : {
        type : Number,
        required : [true ,"Please provide your parent phone number"],
        minLength : [10 , "Mobile number should have atleast 10 numbers"]
    },
    createdAt : {
        type : Date,
        default : Date.now,
    },
    role: {
        type :String,
        default : 'user'
    },
});

module.exports = mongoose.model("USER",userModel); 