const fs = require('fs');
const path = require('path');

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
    },redirect: (req,res)=>{
        res.redirect("/")
    },sendConditions:(req,res)=>{
        res.render("index/sendConditions.ejs")
    },howToBuy:(req,res)=>{
        res.render("index/howToBuy.ejs")
        
    },legals:(req,res)=>{
        res.render("index/legals.ejs")
        
    },promotions:(req,res)=>{
        res.render("index/promotions.ejs")
        
    },regrets:(req,res)=>{
        res.render("index/regrets.ejs")
        
    }
}
module.exports= mainControler