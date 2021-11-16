const express=require("express");
const usersControler={
    register:(req,res)=>{
        res.render("users/register.ejs")
    },
    login:(req,res)=>{
        res.render("users/login.ejs")
    },redirect: (req,res)=>{
        res.redirect("/")
    }
}
module.exports= usersControler