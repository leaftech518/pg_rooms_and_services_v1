const express = require("express");
const USER = require("../models/userModel");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const customError = require("../utils/customError");
const cloudinary = require("cloudinary");

exports.signUp = catchAsyncErrors(async(req,res,next) => {

    const {name , email , firebaseUID , phoneNumber ,parentPhone} = req.body;

    const user = await USER.findOne({firebaseUID});


    if(!user){
        if(req.body){
            if(req.body.phoneNumber === null){
                req.body.phoneNumber = req.body.firebaseUID;
            }
            else{
                req.body.email = req.body.firebaseUID;
            }
        
            const user = await USER.create({
                name,email,firebaseUID,photo:{
                    id : "sample id",
                    public_url : "sample public url",
                    secure_url : "sample secure url"
                },
                parentPhone
            });
            
            res.status(200).json({
                success :true,
                message : "user posted",
                user
            });
        }else{
            return next(new customError("Please provide user details to sign up", 400));
        }
    }else{
        res.status(401).json({
            success : false,
            message : "User already exists",
            user
        });
    }
    
    

});