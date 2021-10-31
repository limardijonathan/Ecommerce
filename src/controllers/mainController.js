const fs = require('fs');
const path = require('path');



const express=require("express");
const productsFilePath = path.join(__dirname, '../data/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainControler={
    home:(req,res)=>{
        res.render("index/home.ejs")
    },
    register:(req,res)=>{
        res.render("users/register.ejs")
    },
    login:(req,res)=>{
        res.render("users/login.ejs")
    },
    productCart:(req,res)=>{
        res.render("products/productCart.ejs")
    },productDetail:(req,res)=>{
        res.render("products/productDetail.ejs")
    },addProduct:(req,res) =>{
        res.render("products/addProduct.ejs")
    },editProduct:(req,res) =>{
        res.render("products/editProduct.ejs")
    },listProduct:(req,res) =>{
        res.render("products/productList.ejs",
        {productSent: porduct})
    },
    redirect: (req,res)=>{
        res.redirect("/")
    }
}

module.exports= mainControler