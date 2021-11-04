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
        const id = req.params.id;    
        const product = products.find(product =>{
			return product.id == id
		})

        res.render("products/productDetail.ejs",{
            productSent: product
        })
    },addProduct:(req,res) =>{
        res.render("products/addProduct.ejs")
    },editProduct:(req,res) =>{
        const id = req.params.id;    
        const product = products.find(product =>{
			return product.id == id
		})
        res.render("products/editProduct",{
            productSent: product
        })
    },
    update:(req,res)=>{let id =req.params.id;
		let productToEdit = products.find(product =>{
			return product.id == id
		})
		let editedProduct={
			id:id,
			name:req.body.name,
			price:req.body.price,
			discount:req.body.discount,
			category:req.body.category,
			description:req.body.description,
			/* ...req.body */
			image: req.file ? req.file.filename : productToEdit.image
		}
		products.forEach((producto,index) => {
			if (producto.id == id){
				products[index] =editedProduct
			}
			
		})
        fs.writeFileSync(productsFilePath, JSON.stringify(products,null, " "))
		res.redirect("/products")},
    listProduct:(req,res) =>{
        res.render("products/productList.ejs",
        {productsSent: products})
    },
    redirect: (req,res)=>{
        res.redirect("/")
    }
}

module.exports= mainControler