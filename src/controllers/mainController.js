const express=require("express");


const mainControler={
    home:(req,res)=>{
        res.render("home")
    },
    register:(req,res)=>{
        res.render("register")
    },
    login:(req,res)=>{
        res.render("login")
    },
    productCart:(req,res)=>{
        res.render("productCart")
    },productDetail:(req,res)=>{
        res.render("productDetail")
    },addProduct:(req,res) =>{
        res.render("addProduct")
    }
}

module.exports= mainControler